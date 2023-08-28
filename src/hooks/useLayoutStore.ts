import { RefScroll } from "@/types/RefScroll"
import { defineStore } from "pinia"
import { ref } from "vue"

interface State {
    isOpenDrawer: boolean,
    isTopActionSheet: boolean
    isTinyGridView: boolean
    isPwa: boolean
    isInfiniteScroll: boolean
    scrollContainer: RefScroll | null
    isOpenSearchDrawer: boolean

}

export const useLayoutStore = defineStore('layout', {
    state: (): State => {
        return {
            isOpenDrawer: false,
            isTopActionSheet: true,
            isTinyGridView: false,
            isPwa: false,
            isInfiniteScroll: false,
            scrollContainer: null,
            isOpenSearchDrawer: false
        }
    },

})




