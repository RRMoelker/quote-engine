<script setup lang="ts">
import AppTitle from './components/AppTitle.vue'
import QuoteList from './components/QuoteList.vue'
import { ref } from 'vue'
import type { QuoteType } from '@/types'
import { fetchQuote } from '@/api/fetcher'
import { transformQuote } from '@/api/transformer'
import { getInitialQuotes } from '@/api/quotes'
import { characters } from '@/api/characters'

const selectedCharacter = ref('')
const quotes = ref<QuoteType[]>(getInitialQuotes())
const errorMessage = ref<string>('')

const getQuote = async () => {
  let quote: QuoteType
  try {
    quote = await fetchQuote()
  } catch (error: any) {
    errorMessage.value = error
    return
  }
  // Replace current array with single new item
  quotes.value[0] = quote
  quotes.value.length = 1
}
const onQuoteRemove = (id: number) => {
  quotes.value = quotes.value.filter((q) => q.id !== id)
  if (quotes.value.length > 0) {
    quotes.value[0].derivative = false // The first quote is the basis for the rest
  }
}

const handleSubmit = async () => {
  const targetCharacter = selectedCharacter.value
  console.log('Transforming quote to character:', targetCharacter)
  let quote: QuoteType
  try {
    quote = await transformQuote(quotes.value[0], targetCharacter)
  } catch (error: any) {
    errorMessage.value = error
    return
  }
  quotes.value.push(quote)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <AppTitle msg="The quote fetcher" />
      <button @click="getQuote" :class="{ primary: quotes.length === 0 }">Get new quote</button>
      <form v-if="quotes.length > 0" @submit.prevent="handleSubmit">
        <h2>Who should say it differently?</h2>
        <select v-model="selectedCharacter">
          <option disabled value="">Select a character</option>
          <option v-for="character in characters" :key="character">{{ character }}</option>
        </select>
        <button
          :disabled="selectedCharacter.length === 0"
          :class="{ primary: selectedCharacter.length > 0 }"
        >
          Rephrase it
        </button>
      </form>
      <p>{{ errorMessage }}</p>
    </div>
  </header>

  <main>
    <QuoteList :quotes="quotes" @removeItem="onQuoteRemove" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  display: block;
  font-size: 1.2rem;
  margin: 2rem 0;
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

button.primary {
  background-color: var(--accent-1--a);
}

button:hover:not(:disabled) {
  background-color: var(--accent-1--b);
}

button:active:not(:disabled) {
  background-color: var(--accent-1--c);
}

select {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.2em 0.6em;
  margin-top: 10px;
  background: transparent;
  transition: background-color 0.5s;

  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  color: inherit;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
