<script setup lang="ts">
import AppTitle from './components/AppTitle.vue'
import QuoteList from './components/QuoteList.vue'
import { ref } from 'vue'
import type { QuoteType } from '@/types'
import { fetchQuote, getInitialQuotes } from '@/api/fetcher'

const quotes = ref<QuoteType[]>(getInitialQuotes())
const errorMessage = ref<string>('')

const getQuote = async () => {
  try {
    const quote: QuoteType = await fetchQuote()
    quotes.value.push(quote)
  } catch (error: any) {
    errorMessage.value = error;
  }
}
const onChildRemove = (id: number) => {
  quotes.value = quotes.value.filter((q) => q.id !== id)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <AppTitle msg="The quote fetcher" />
      <button @click="getQuote">Get new quote</button>
      <p>{{ errorMessage }}</p>
    </div>
  </header>

  <main>
    <QuoteList :quotes="quotes" @removeItem="onChildRemove" />
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
  background-color: var(--accent-1--a);
}

button:hover {
  background-color: var(--accent-1--b);
}

button:active {
  background-color: var(--accent-1--c);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
