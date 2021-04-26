/*
 * @Description:
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2021-04-26 10:16:17
 * @LastEditors: Wsl
 * @LastEditTime: 2021-04-26 16:02:35
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
