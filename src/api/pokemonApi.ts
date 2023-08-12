import { defineComponent, reactive, ref, type ComputedRef, type Ref } from "vue";
import { useQuery } from "vue-query";
import axios from "axios";
import { basePokemonApi } from "@/constants";
import { usePokemonItemStore } from '../hooks/usePokemonItemStore';
import { storeToRefs } from "pinia";
import type { PokemonItem } from "@/types/PokemonItem";


export const useTestApi = (page: number) => {
    const fetcher = () =>
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
        ).then((response) => response.json())


    return useQuery({
        queryKey: ['projects', page],
        queryFn: () => fetcher(),
        keepPreviousData: true,
    })

}





export const getAll = async ({ page }: { page: number }) => {
    let num = 12
    const response = await axios.get(basePokemonApi + 'pokemon', {
        params: {
            offset: (page - 1) * num,
            limit: num
        }
    });
    return response.data;
};


export const useGetAllPokemon = (page: Ref<number>) => {
    console.log('api page: ', page.value);

    const getAll = async () => {
        const response = await axios.get(basePokemonApi + 'pokemon', {
            params: {
                offset: (page.value - 1) * 12,
                limit: 12
            }
        });
        return response.data;
    };

    return useQuery({
        queryKey: ["getAllPokemon", page.value],
        queryFn: () => getAll(),
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });
};





export const useGetOnePokemon = () => {

    const pokemonItem = usePokemonItemStore()
    const { name } = storeToRefs(pokemonItem)
    async function getOnePokemon() {

        console.log("pokemonItem: ", name.value);
        const { data } = await axios({
            method: 'get',
            url: basePokemonApi + `pokemon/${name.value}`
        })
        return data
    }
    return useQuery({
        queryKey: ["getOnePokemon", name],
        queryFn: () => getOnePokemon(),
        enabled: true,
        refetchOnWindowFocus: false,


    });
}
export const useGetOnePokemonByProps = (name: Ref<string>, enabled: boolean = true) => {

    async function getOnePokemon() {
        const { data } = await axios({
            method: 'get',
            url: basePokemonApi + `pokemon/${name.value}`
        })
        return data
    }
    return useQuery({
        queryKey: ["getOnePokemon", name],
        queryFn: () => getOnePokemon(),
        enabled: enabled,
        refetchOnWindowFocus: false,
        keepPreviousData: true

    });
}


export const useGetPokmonSpecies = (name: Ref<string>) => {
    const getPokmonSpecies = async () => {
        const { data } = await axios({
            method: 'get',
            url: basePokemonApi + `pokemon-species/${name.value}/`
        })
        return data
    }
    return useQuery({
        queryKey: ["getPokmonSpecies", name],
        queryFn: () => getPokmonSpecies(),
        enabled: !!name,
        refetchOnWindowFocus: false,
        keepPreviousData: true

    });
}



export const useGetEvolutionChain = (evolutionChainUrl: Ref<string>, name: Ref<string>) => {


    const getEvolutionChain = async () => {
        const { data } = await axios({
            method: 'get',
            url: evolutionChainUrl.value
        })
        return data
    }
    return useQuery({
        queryKey: ["getEvolutionChain", name],
        queryFn: () => getEvolutionChain(),
        enabled: !!evolutionChainUrl,
        refetchOnWindowFocus: false,
        keepPreviousData: true

    });
}