<script setup lang="ts">
import { useGetEvolutionChain } from "@/api/pokemonApi";
import type { EvolutionChain } from "@/types/EvolutionChain";
import { computed, reactive, ref } from "vue";
import _ from "lodash";
import { getUrlId } from "@/utils/function";
import { usePokemonItemStore } from "@/hooks/usePokemonItemStore";

interface Props {
  evolutionChainUrl: string;
  name: string;
  id: number;
}

interface EvolveChain {
  name: string;
  id: number;
}
const pokemonItem = usePokemonItemStore();
const props = defineProps<Props>();
const evolutionChainUrlRef = ref<string>(props.evolutionChainUrl);
const name = ref<string>(props.name);

const { isError, error, isFetching, data } =
  useGetEvolutionChain(evolutionChainUrlRef);

const nameItems = reactive<EvolveChain[]>([]);

const traverseObject = (obj: Object) => {
  _.forOwn(obj, (value, key) => {
    if (key === "species") {
      let obj = {
        //@ts-ignore
        id: getUrlId(value["url"]),
        name: value["name"],
      };
      nameItems.push(obj);
    }
    if (_.isObject(value)) {
      traverseObject(value);
    }
  });
  return nameItems;
};

const image = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const handleClickEvolveChainItem = (id: number) => {
  pokemonItem.id = id;
};
</script>
<template>
  <div v-if="!data">Loading</div>
  <div v-if="data">
    <v-row cols="12" sm="6" md="4">
      <v-col
        v-for="item in traverseObject(data).slice().reverse()"
        :key="item.id"
      >
        <!-- <v-img height="20vw" width="20vw" class="bg-blue-grey-darken-1"></v-img> -->
        <v-card
          class="d-flex flex-column justify-center align-center"
          @click="handleClickEvolveChainItem(item.id)"
          hover
        >
          <!-- <v-img height="20vw" width="20vw" class="bg-grey-darken-3">{{
            item.id
          }}</v-img> -->
          <v-img :src="image(item.id)" height="20vw" width="20vw"></v-img>
          <div>
            {{ item.name }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
