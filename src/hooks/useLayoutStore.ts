import { defineStore } from "pinia"

interface State {
    isOpenDrawer: boolean,

}

export const useLayoutStore = defineStore('layout', {
    state: (): State => {
        return {
            isOpenDrawer: false,
        }
    },

})




