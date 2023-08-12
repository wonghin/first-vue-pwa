import { defineStore } from "pinia"
import { useTheme } from "vuetify"

interface State {
  isLogin: boolean,
  theme: string | Theme
  isDarkTheme: boolean
}

enum Theme {
  darkMode = 'dark',
  lightMode = 'light'
}
export const useUserInfoStore = defineStore('userInfo', {
  state: (): State => {
    return {
      isLogin: false,
      theme: Theme.darkMode,
      isDarkTheme: true
    }
  },
  persist: true,

})




