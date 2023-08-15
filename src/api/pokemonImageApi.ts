import { defineComponent, reactive, ref, type ComputedRef, type Ref } from "vue";
import { useQuery } from "vue-query";
import axios from "axios";
import { basePokemonApi } from "@/constants";
import { usePokemonItemStore } from '../hooks/usePokemonItemStore';
import { storeToRefs } from "pinia";
import type { PokemonItem } from "@/types/PokemonItem";
import { EvolutionChain } from "@/types/EvolutionChain";


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

export const useGetBitImagePNG = (id: Ref<number>) => {
    const getBitImagePNG = async () => {
        const { data } = await axios({
            method: 'get',
            url: '' + `${id}`
        })
        return data
    }

    return useQuery({
        queryKey: ["getBitImagePNG", id],
        queryFn: () => getBitImagePNG(),
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true
    })
}


export const useGetBitImageGIf = (id: Ref<number>) => {
    const getBitImageGIF = async () => {
        const { data } = await axios({
            method: 'get',
            url: '' + `${id}`
        })
        return data
    }

    return useQuery({
        queryKey: ["getBitImageGIF", id],
        queryFn: () => getBitImageGIF(),
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true
    })
}