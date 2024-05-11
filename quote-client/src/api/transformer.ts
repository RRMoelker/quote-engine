import type { QuoteType } from '@/types'
import { createQuote } from '@/api/quotes'

type RemoteQuote = {
  quote: string
}

const transformUrl = import.meta.env.VITE_API_TRANSFORM_URL

export const transformQuote = (quote: QuoteType, character: string): Promise<QuoteType> => {
  console.log(`Transforming from: ${transformUrl}`)
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quote: quote.content,
      character
    })
  }
  return fetch(transformUrl, options)
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
        author: `Paraphrased by ${character}`,
        derivative: true
      })
    })
}
