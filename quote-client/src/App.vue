<script setup lang="ts">
import AppTitle from './components/AppTitle.vue'
import QuoteList from './components/QuoteList.vue'
import { ref } from 'vue'
import { Quote } from '@/types'

let id = 0
const quotes = ref<Quote[]>([
  { id: id++, content: 'When in doubt, push the button. It\'s amazing how many things can be solved by just taking action', author: 'Attributed to Robert H. Schuller, actually hallucinated by GPT 3.5' },
])

function getQuote() {
  console.log('getting quote')
}
function onChildRemove(id: number) {
  console.log(id)
  quotes.value = quotes.value.filter((q) => q.id !== id)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <AppTitle msg="The quote fetcher" />
      <button @click="getQuote">Get new quote</button>
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
