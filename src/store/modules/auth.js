import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/auth/login',
          credentials
        );
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        console.log(token);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async register({ commit }, dataUsers) {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/auth/register',
          dataUsers
        );
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        console.log(token);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');
      //   Log Token removed
      console.log('Token Removed:', token);
      window.location.href = "/sign-in";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
};

export default auth;