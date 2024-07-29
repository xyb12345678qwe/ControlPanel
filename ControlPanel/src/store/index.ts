import { createStore } from 'vuex';

export default createStore({
  state: {
    token: ''
  },
  getters: {
    getToken(state) {
      if (state.token === '') {
        return localStorage.getItem("token");
      }
      return state.token;
    }
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token;
      localStorage.setItem("token", token);
    }
  },
  actions: {},
  modules: {}
});
