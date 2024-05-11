import type { QuoteType } from '@/types'
import { createQuote } from '@/api/quotes'

type RemoteQuote = {
  quote: string
  author: string
}

const quoteUrl = import.meta.env.VITE_API_QUOTE_URL

export const fetchQuote = (): Promise<QuoteType> => {
  console.log(`Fetching from: ${quoteUrl}`)
  return fetch(quoteUrl)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
    })
    .then((data: RemoteQuote) => {
      console.log('Data received:', data)
      return createQuote({
        content: data.quote,
        author: data.author
      })
    })
}
