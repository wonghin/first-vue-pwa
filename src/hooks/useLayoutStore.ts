import { defineStore } from "pinia"

interface State {
    isOpenDrawer: boolean,
    isTopActionSheet: boolean

}

export const useLayoutStore = defineStore('layout', {
    state: (): State => {
        return {
            isOpenDrawer: false,
            isTopActionSheet: true
        }
    },

})




