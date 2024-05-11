import type { QuoteType } from '@/types'

export type CreateQuoteType = Partial<QuoteType> & Required<Pick<QuoteType, 'content' | 'author'>>

let id = 0

export const createQuote = (data: CreateQuoteType): QuoteType => {
  return {
    id: id++,
    derivative: false,
    ...data
  }
}

export const getInitialQuotes = () => [
  createQuote({
    content:
      "When in doubt, push the button. It's amazing how many things can be solved by just taking action",
    author: 'Attributed to Robert H. Schuller, actually hallucinated by GPT 3.5'
  })
]
