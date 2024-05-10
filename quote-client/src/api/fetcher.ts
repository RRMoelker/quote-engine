import { type QuoteType } from '@/types' // TODO: Solve build problem, Vite apparently has an issue with TypeScript outside .vue files, see: https://stackoverflow.com/a/69058599

type RemoteQuote = {
  quote: string
  author: string
}

let id = 0
export const getInitialQuotes = () => [
  {
    id: id++,
    content:
      "When in doubt, push the button. It's amazing how many things can be solved by just taking action",
    author: 'Attributed to Robert H. Schuller, actually hallucinated by GPT 3.5'
  }
]

const quoteUrl = import.meta.env.VITE_API_BASE_URL
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
      return {
        id: id++,
        content: data.quote,
        author: data.author
      }
    })
}
