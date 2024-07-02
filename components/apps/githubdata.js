import axios from "axios"
import { useEffect, useState } from "react"

export const useGithubData = () => {
  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {
    axios
      .get("/api/github")
      .then((response) => {
        setResumeData(response.data)
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error)
      })
  }, [])

  return { resumeData }
}
