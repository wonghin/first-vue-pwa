<script setup lang="ts">
import { useGetAllType } from "@/api/pokemonApi";
import TypeButton from "./TypeButton.vue";
import { computed } from "vue";
import { usePokemonItemStore } from "@/hooks/usePokemonItemStore";

const { data, isLoading, isError } = useGetAllType();
const pokemonItem = usePokemonItemStore();
const imageExists = (type: string) => {
  try {
    require(`@/assets/pokemonTypeIcon/${type}.svg`);
    return require(`@/assets/pokemonTypeIcon/${type}.svg`);
  } catch (e) {
    return "";
  }
};
const imageExists2 = (type: string) => {
  try {
    const typsString = type.charAt(0).toUpperCase() + type.slice(1);
    require(`@/assets/pokemonTypeIcon2/${typsString}.png`);
    return require(`@/assets/pokemonTypeIcon2/${typsString}.png`);
  } catch (e) {
    return "";
  }
};
</script>
<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="data" class="d-flex flex-wrap">
    <!-- <TypeButton :path="require(`@/assets/pokemonTypeIcon/${item.name}.svg`)" /> -->
    <div v-for="(item, index) in data.results" :key="index">
      <TypeButton
        :name="item.name"
        :path="imageExists2(item.name)"
        v-if="imageExists2(item.name) !== ''"
        class="ma-1"
      />
    </div>
  </div>
</template>
