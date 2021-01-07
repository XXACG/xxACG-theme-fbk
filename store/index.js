import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import saveToLocalStorage from '@/store/plugins/localStorage'
import {changeAppearance} from "@/utils/common";

Vue.use(Vuex)

let plugins = [saveToLocalStorage]

const options = {
  state,
  mutations,
  actions,
  plugins,
};
const store = new Vuex.Store(options);

changeAppearance(store.state.settings.appearance);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (store.state.settings.appearance === "auto") {
      changeAppearance(store.state.settings.appearance);
    }
  });

export default store
