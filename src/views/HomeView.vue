<script setup lang="ts">
import { getAll } from "@/api/pokemonApi";
import Card from "@/components/card/Card.vue";
import PageCardSkeleton from "@/components/loading/PageCardSkeleton.vue";
import { useLayoutStore } from "@/hooks/useLayoutStore";
import {
  usePokemonItemStore,
  type PokemonItemStore,
} from "@/hooks/usePokemonItemStore";
import { debounce } from "lodash";
import { ref, watch } from "vue";
import { useQuery } from "vue-query";
import { useDisplay } from "vuetify";
const { xs, sm } = useDisplay();
const layout = useLayoutStore();

const page = ref<number>(1);
const pokemonItem = usePokemonItemStore();

const { isLoading, isError, data, error, isFetching } = useQuery({
  queryKey: ["getAllPokemon", page],
  queryFn: () => getAll({ page: page.value }),
  enabled: true,
  refetchOnWindowFocus: false,
  keepPreviousData: true,
});

const handlePagination = debounce((pageNum: number) => {
  page.value = pageNum;
}, 400);

const getImageUrlId = (dataUrl: any) => {
  const parts = dataUrl.split("/");
  const number = parts[parts.length - 2];
  return parseInt(number);
};

const handleToggle = ({ name, url }: { name: string; url: string }) => {
  pokemonItem.name = name;
  pokemonItem.id = getImageUrlId(url);
  pokemonItem.isPokemonItemOpen = !pokemonItem.isPokemonItemOpen;
};

watch(isFetching, () => {
  pokemonItem.paginationLoading = isFetching.value;
});

const scrollToBottom = () => {
  window.scrollTo({
    top: 99999,
    left: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <PageCardSkeleton v-if="isLoading" />
  <v-icon
    @click="scrollToBottom"
    icon="mdi-menu-down"
    size="x-large"
    style="position: sticky; top: 80px"
  />
  <v-container
    fluid
    :class="
      layout.isOpenDrawer || pokemonItem.isPokemonItemOpen
        ? 'overflow-hidden'
        : ''
    "
    :style="
      layout.isOpenDrawer || pokemonItem.isPokemonItemOpen ? 'height:80vh' : ''
    "
  >
    <div>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="isError">An error has occurred: {{ error }}</div>

      <v-row v-if="data" class="mt-2">
        <v-col
          class="d-flex justify-center"
          cols="12"
          sm="6"
          md="4"
          v-for="(item, index) in data.results"
          :key="item.name"
        >
          <div @click="handleToggle({ ...item })">
            <Card
              :title="item.name"
              :id="getImageUrlId(item.url)"
              :isLoading="isLoading"
            />
          </div>
        </v-col>
      </v-row>
    </div>

    <v-pagination
      v-if="data"
      :length="100"
      v-on:next="handlePagination"
      v-on:prev="handlePagination"
      v-on:update:model-value="handlePagination"
      :density="sm || xs ? 'comfortable' : 'default'"
      class="mb-16 mt-2"
    >
    </v-pagination>
  </v-container>
</template>
