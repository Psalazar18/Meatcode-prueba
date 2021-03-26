import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articulos: [],
  },
  mutations: {
    setArticulos(state, array){
      state.articulos = array
    },
  },
  actions: {
    getArticulos: async function({commit}){
      try {
        const data = await fetch('https://5eed24da4cbc340016330f0d.mockapi.io/api/articles');
        let array = []
        array = await data.json();
        commit('setArticulos', array)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
