<!-- <script setup lang="ts">
import { useTestApi } from '@/api/pokemonApi'
import { ref, watch, type Ref } from 'vue'
import { useQuery } from 'vue-query'

const fetcher = (page: number) =>
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`).then((response) =>
    response.json()
  )

const page = ref(1)
const { isLoading, isError, data, error, isFetching, isPreviousData } = useQuery({
  queryKey: ['projects', page],
  queryFn: () => fetcher(page.value),
  keepPreviousData: true
})
const prevPage = () => {
  page.value = Math.max(page.value - 1, 1)
}
const nextPage = () => {
  if (!isPreviousData.value) {
    page.value = page.value + 1
  }
}
</script>

<template>
  <h1>Pagination Example</h1>
  <h1>Posts</h1>
  <p>Current Page: {{ page }} | Previous data: {{ isPreviousData }}</p>
  <v-btn @click="prevPage">Prev Page</v-btn>
  <v-btn @click="nextPage">Next Page</v-btn>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template> -->

<template></template>
