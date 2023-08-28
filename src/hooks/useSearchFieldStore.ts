import { RefScroll } from "@/types/RefScroll"
import { defineStore } from "pinia"
import { ref } from "vue"

interface State {
    searchItem: string,
}

export const useSearchField = defineStore('SearchField', {
    state: (): State => {
        return {
            searchItem: '',
        }
    },
})




