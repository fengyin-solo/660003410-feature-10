import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CognateSet } from '../types'
import { COGNATE_SETS, LANGUAGE_FAMILIES, buildGraph } from '../mock/data'
export { LANGUAGE_FAMILIES, COGNATE_SETS }

export const useEtymologyStore = defineStore('etymology', () => {
  const graph = ref(buildGraph())
  const selectedNode = ref<any>(null)
  const selectedRoot = ref<CognateSet | null>(null)
  const searchQuery = ref('')
  const selectedFamily = ref('all')

  const filteredCognates = computed(() =>
    COGNATE_SETS.filter(cs => {
      const q = searchQuery.value.toLowerCase()
      const matchSearch = !q || cs.root.toLowerCase().includes(q) || cs.meaning.includes(q) || Object.values(cs.languages).some((w: string) => w.toLowerCase().includes(q))
      const matchFamily = selectedFamily.value === 'all' || cs.family === selectedFamily.value
      return matchSearch && matchFamily
    })
  )

  return { graph, selectedNode, selectedRoot, searchQuery, selectedFamily, filteredCognates }
})
