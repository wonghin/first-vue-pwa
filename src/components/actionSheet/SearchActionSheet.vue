<script setup lang="ts">
import { useLayoutStore } from "@/hooks/useLayoutStore";
import CloseButton from "../button/CloseButton.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import SearchMoveField from "../searchField/SearchMoveField.vue";
import { useGetAllType } from "@/api/pokemonApi";
import { computed } from "vue";
import { watch } from "vue";

const layout = useLayoutStore();
const { data, isLoading, isError } = useGetAllType(false);

const strongType = ref([]);
const weakType = ref([]);
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
  <v-navigation-drawer
    v-model="layout.isOpenSearchDrawer"
    location="right"
    temporary
    style="width: 90vw"
  >
    <CloseButton
      :isClose="
        () => {
          layout.isOpenSearchDrawer = !layout.isOpenSearchDrawer;
        }
      "
    />
    <v-btn
      icon="mdi-refresh"
      class="position-absolute"
      style="top: 10px; right: 10px"
      elevation="0"
    >
    </v-btn>
    <v-container class="mt-16" v-if="data">
      <div style="font-weight: bold" class="mb-4">Type</div>
      <v-row>
        <v-col>
          <v-autocomplete
            v-model="strongType"
            :items="data.results"
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
                :prepend-avatar="imageExists2(item.raw.name)"
                :text="item.raw.name"
              ></v-chip>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-avatar="imageExists2(item.raw.name)"
                :title="item?.raw?.name"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="weakType"
            :items="data.results"
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
                :prepend-avatar="imageExists2(item.raw.name)"
                :text="item.raw.name"
              ></v-chip>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-avatar="imageExists2(item.raw.name)"
                :title="item?.raw?.name"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12"> Locations: </v-col>
        <v-col cols="12"> Generations: </v-col>
        <v-col cols="12"> <SearchMoveField /> </v-col>
      </v-row>
    </v-container>
    <v-container class="text-center">
      <v-btn>Search</v-btn>
    </v-container>
  </v-navigation-drawer>
</template>
