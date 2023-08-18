import axios from "axios";
import { type Ref } from "vue";
import { useQuery } from "vue-query";



export const useGetBitImagePNG = (id: Ref<number>) => {
    const getBitImagePNG = async () => {
        const { data } = await axios({
            method: 'get',
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        })
        return data
    }

    return useQuery({
        queryKey: ["getBitImagePNG", id],
        queryFn: () => getBitImagePNG(),
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        retry: 2
    })
}


export const useGetBitImageGIf = (id: number) => {
    const getBitImageGIF = async () => {
        const { data } = await axios({
            method: 'get',
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        })
        return data
    }

    return useQuery({
        queryKey: ["getBitImageGIF", id],
        queryFn: () => getBitImageGIF(),
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        retry: 2

    })
}