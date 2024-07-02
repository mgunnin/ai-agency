import axios from "axios"
import { NextResponse } from "next/server"

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_USERNAME = process.env.GITHUB_USERNAME

const githubApi = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${GITHUB_TOKEN}`,
    "Content-Type": "application/json",
  },
})

const getUserAndReposQuery = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      name
      email
      company
      bio
      repositories(first: 3, orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            name
            url
            description
            createdAt
            ... on Repository {
              primaryLanguage{
                name
              }
                stargazers {
                  totalCount
                }
              }
          }
        }
      }
    }
  }
`

export async function GET(request) {
  try {
    const response = await githubApi.post("", { query: getUserAndReposQuery })
    const userData = response.data.data.user

    const resumeData = {
      name: userData.name,
      email: userData.email,
      company: userData.company,
      bio: userData.bio,
      repositories: userData.repositories.edges.map((repo) => ({
        name: repo.node.name,
        url: repo.node.url,
        created: repo.node.createdAt,
        description: repo.node.description,
        language: repo.node.primaryLanguage.name,
        stars: repo.node.stargazers.totalCount,
      })),
    }

    return NextResponse.json(resumeData)
  } catch (error) {
    console.error("Error fetching data from GitHub:", error)
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
