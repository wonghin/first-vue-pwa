<script setup lang="ts">
import { useGetEvolutionChain } from '@/api/pokemonApi'
import type { EvolutionChain } from '@/types/EvolutionChain'
import { computed, reactive, ref } from 'vue'
import _ from 'lodash'
import { getUrlId } from '@/utils/function'

interface Props {
  evolutionChainUrl: string
  name: string
}

interface EvolveChain {
  name: string
  id: number
}

const props = defineProps<Props>()
const evolutionChainUrlRef = ref<string>(props.evolutionChainUrl)
const name = ref<string>(props.name)

const {
  isError,
  error,
  isFetching,
  data
} = useGetEvolutionChain(evolutionChainUrlRef, name)

const nameItems = reactive<EvolveChain[]>([])

const traverseObject = (obj: Object) => {
  _.forOwn(obj, (value, key) => {
    if (key === 'species') {
      let obj = {
        //@ts-ignore
        id: getUrlId(value['url']),
        name: value['name']
      }
      nameItems.push(obj)
    }
    if (_.isObject(value)) {
      traverseObject(value)
    }
  })
  return nameItems
}

const image = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}
</script>
<template>
  <div v-if="data">
    <v-row>
      <v-col v-for="item in traverseObject(data).slice().reverse()" :key="item.id">
        <div>
          <v-img :src="image(item.id)" height="20vw" width="20vw"></v-img>
          <!-- <v-img height="20vw" width="20vw" class="bg-blue-grey-darken-1"></v-img> -->
          <div class="text-center">
            {{ item.name }}
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
