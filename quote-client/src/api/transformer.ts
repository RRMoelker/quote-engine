import type { QuoteType } from '@/types'

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
            character,
        })
    };
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
            return {
                id: 42, // TODO
                content: data.quote,
                author: `Paraphrase by ${character}`,
            }
        })
}