<script setup lang="ts">
import { useLayoutStore } from "@/hooks/useLayoutStore";
import { ref } from "vue";
import PokemonTypeListButton from "../button/pokemonTypeListButton/PokemonTypeListButton.vue";
import { useGetTotalPokemon } from "@/api/pokemonApi";
import { useSearchField } from "@/hooks/useSearchFieldStore";


const layout = useLayoutStore();
const searchField = useSearchField()

const submit = (e: Event) => {
  searchField.searchItem = (e.target as HTMLInputElement).value;
  console.log(searchField.searchItem);
};
const handleOnchage = (text: string) => {
  searchField.searchItem = text
  console.log(searchField.searchItem);
};

const { data } = useGetTotalPokemon()


</script>

<template>
  <v-sheet elevation="5" rounded="lg" min-height="20vh" class="px-4 d-flex flex-column">
    <!-- @keydown.enter="submit" -->
    <v-text-field label="Search" class="pt-11" prepend-inner-icon="mdi-magnify" density="compact" hide-details="auto"
      @update:model-value="handleOnchage" />


    <PokemonTypeListButton class="mt-2" />
    <v-btn class="mt-4" style="align-self: flex-start"
      @click="layout.isOpenSearchDrawer = !layout.isOpenSearchDrawer">Advanced Search
    </v-btn>

    <v-switch :label="!layout.isInfiniteScroll ? 'Infinite scroll' : 'Pagination'" v-model="layout.isInfiniteScroll"
      class="d-flex" style="align-self: flex-end"></v-switch>
    <v-switch :label="!layout.isTinyGridView ? 'Small view' : 'Large view'" v-model="layout.isTinyGridView" class="d-flex"
      style="align-self: flex-end">
    </v-switch>
  </v-sheet>
</template>
