import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFocus = defineStore('focus', () => {
  const focus = ref(false)

  function $reset() {
    focus.value = false
  }

  return { focus, $reset }
})
