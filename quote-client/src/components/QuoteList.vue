<script setup lang="ts">
import QuoteItem from './QuoteItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import type { QuoteType } from '@/types'

const emit = defineEmits(['removeItem'])
defineProps<{
  quotes: QuoteType[]
}>()
</script>

<template>
  <QuoteItem v-for="quote in quotes" :key="quote.id" @remove="() => emit('removeItem', quote.id)">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ quote.author }}</template>
    {{ quote.content }}
  </QuoteItem>
</template>
