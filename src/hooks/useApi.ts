import { useCallback, useState } from "react"

interface ApiResponse<T> {
  data: T | null
  error: Error | null
  loading: boolean
}

function useApi<T>(url: string) {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  })

  const fetchData = useCallback(async () => {
    setResponse({ data: null, error: null, loading: true })
    try {
      const res = await fetch(url)
      const data = await res.json()
      setResponse({ data, error: null, loading: false })
    } catch (error) {
      setResponse({ data: null, error: error as Error, loading: false })
    }
  }, [url])

  return { ...response, fetchData }
}

export default useApi
