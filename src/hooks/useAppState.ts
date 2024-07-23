import { useCallback, useState } from "react"

interface AppState {
  theme: "light" | "dark"
  language: string
}

function useAppState() {
  const [state, setState] = useState<AppState>({
    theme: "light",
    language: "en",
  })

  const setTheme = useCallback((theme: "light" | "dark") => {
    setState((prevState) => ({ ...prevState, theme }))
  }, [])

  const setLanguage = useCallback((language: string) => {
    setState((prevState) => ({ ...prevState, language }))
  }, [])

  return { state, setTheme, setLanguage }
}

export default useAppState
