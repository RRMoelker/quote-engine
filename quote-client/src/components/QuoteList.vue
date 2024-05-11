<script setup lang="ts">
import QuoteItem from './QuoteItem.vue'
import type { QuoteType } from '@/types'
import IconDocumentation from './icons/IconDocumentation.vue'
import IconCommunity from './icons/IconCommunity.vue'

const emit = defineEmits(['removeItem'])
defineProps<{
  quotes: QuoteType[]
}>()
</script>

<template>
  <QuoteItem v-for="quote in quotes" :key="quote.id" @remove="() => emit('removeItem', quote.id)">
    <template #icon>
      <IconCommunity v-if="quote.derivative" />
      <IconDocumentation v-else />
    </template>
    <template #heading>{{ quote.author }}</template>
    {{ quote.content }}
  </QuoteItem>
</template>
