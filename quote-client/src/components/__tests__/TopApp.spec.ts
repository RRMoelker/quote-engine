import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Top app', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Get new quote')
  })
})
