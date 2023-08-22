<script setup lang="ts">
import { useLayoutStore } from "@/hooks/useLayoutStore";
import CloseButton from "../button/CloseButton.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import SearchMoveField from "../searchField/SearchMoveField.vue";

const layout = useLayoutStore();
const strongType = ref(["Sandra Adams", "Britta Holt"]);
const weakType = ref(["Sandra Adams"]);

const srcs = {
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
};
const people = ref([
  { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
  { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
  { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
  { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },

  { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
  { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
  { name: "John Smith", group: "Group 2", avatar: srcs[1] },
  { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] },
]);
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
    >
    </v-btn>
    <v-container class="mt-16">
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
