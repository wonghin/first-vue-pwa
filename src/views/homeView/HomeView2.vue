<script setup lang="ts">
import Container from "@/components/viewContainer/Container.vue";
import SearchField from "@/components/searchField/SearchField.vue";
import PokemonPaginationView from "./PokemonPaginationView.vue";
import { useLayoutStore } from "@/hooks/useLayoutStore";
import TestView from "../TestView.vue";
import PokemonInfiniteScrollView from "./PokemonInfiniteScrollView.vue";
import ScrollButton from "@/components/button/ScrollButton.vue";
const layout = useLayoutStore();
</script>

<template>
  <PokemonPaginationView v-if="!layout.isInfiniteScroll" />
  <PokemonInfiniteScrollView v-else />
  <!-- <ScrollButton
    :isUp="true"
    style="position: fixed; bottom: 50px; right: 4px"
  /> -->
</template>
