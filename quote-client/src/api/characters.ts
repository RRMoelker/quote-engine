import { ref } from 'vue'

const charactersUrl = import.meta.env.VITE_API_CHARACTERS_URL

type RemoteCharacter = {
  id: number
  name: string
  origin: string
  description: string
}
type RemoteList = {
  count: number
  results: RemoteCharacter[]
}

export default function useCharactersApi() {
  const characters = ref<string[]>([])
  const loading = ref<boolean>(false)
  const error = ref(null)

  const fetchCharacters = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(charactersUrl)
      if (!response.ok) {
        throw new Error('Failed to fetch characters')
      }
      const data: RemoteList = await response.json()
      characters.value = data.results.map((c) => c.description)
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    characters,
    loading,
    error,
    fetchCharacters
  }
}
