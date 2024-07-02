import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = "edge"

export async function POST(req) {
  try {
    const forwardedProps = await req.json()

    const stream = openai.chat.completions.stream({
      model: "gpt-3.5-turbo",
      ...forwardedProps,
      stream: true,
    })

    return new Response(stream.toReadableStream())
  } catch (error) {
    return new Response("", { status: 500, statusText: error.message })
  }
}
