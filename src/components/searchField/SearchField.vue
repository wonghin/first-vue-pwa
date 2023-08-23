<script setup lang="ts">
import { useLayoutStore } from "@/hooks/useLayoutStore";
import { ref } from "vue";
import PokemonTypeListButton from "../button/pokemonTypeListButton/PokemonTypeListButton.vue";
import { useGetAllType } from "@/api/pokemonApi";

const { data, isLoading, isError } = useGetAllType();

const layout = useLayoutStore();

const submit = (e: Event) => {
  const submitValue = (e.target as HTMLInputElement).value;
  console.log(submitValue);
};
const strongType = ref(["Britta Holt"]);
const weakType = ref(["Sandra Adams"]);

const srcs = {
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
};
const people = ref([
  // TODO: https://github.com/vuetifyjs/vuetify/issues/15721
  // { header: 'Group 1' },
  { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
  { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
  { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
  { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },
  // { divider: true },
  // { header: 'Group 2' },
  { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
  { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
  { name: "John Smith", group: "Group 2", avatar: srcs[1] },
  { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] },
]);

const isAdvancedSearch = ref(false);
</script>

<template>
  <v-sheet
    elevation="5"
    rounded="lg"
    min-height="20vh"
    class="px-4 d-flex flex-column"
  >
    <v-text-field
      label="Search"
      class="pt-11"
      clearable
      prepend-inner-icon="mdi-magnify"
      density="compact"
      @keydown.enter="submit"
      hide-details="auto"
    />

    <!-- @click="isAdvancedSearch = !isAdvancedSearch" -->
    <PokemonTypeListButton class="mt-2" />
    <v-btn
      class="mt-4"
      style="align-self: flex-start"
      @click="layout.isOpenSearchDrawer = !layout.isOpenSearchDrawer"
      >Advanced Search
    </v-btn>
    <!-- 
    <div v-if="isAdvancedSearch" class="mt-2">
      <v-row>
        <v-col>
          <v-autocomplete
            v-model="strongType"
            :items="people"
            chips
            closable-chips
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Strong type"
            multiple
          >
            <template v-slot:chip="{ props, item }">
              <v-chip
                v-bind="props"
                :prepend-avatar="item.raw.avatar"
                :text="item.raw.name"
              ></v-chip>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-avatar="item?.raw?.avatar"
                :title="item?.raw?.name"
                :subtitle="item?.raw?.group"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="weakType"
            :items="people"
            chips
            closable-chips
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Weak type"
            multiple
          >
            <template v-slot:chip="{ props, item }">
              <v-chip
                v-bind="props"
                :prepend-avatar="item.raw.avatar"
                :text="item.raw.name"
              ></v-chip>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-avatar="item?.raw?.avatar"
                :title="item?.raw?.name"
                :subtitle="item?.raw?.group"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </div> -->

    <v-switch
      :label="!layout.isInfiniteScroll ? 'Infinite scroll' : 'Pagination'"
      v-model="layout.isInfiniteScroll"
      class="d-flex"
      style="align-self: flex-end"
    ></v-switch>
    <v-switch
      :label="!layout.isTinyGridView ? 'Small view' : 'Large view'"
      v-model="layout.isTinyGridView"
      class="d-flex"
      style="align-self: flex-end"
    >
    </v-switch>
  </v-sheet>
</template>
