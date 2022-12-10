import axios from 'axios';
import { getAccessorType, mutationTree, actionTree } from 'typed-vuex';
import * as UserModule from '~/store/UserModule';
import * as EditModule from '~/store/EditModule';

export const state = () => ({});

type RootState = ReturnType<typeof state>

export const getters = {
  hello: (_state: RootState) => (localStorage.getItem('fourB.hello')),
  accessToken: (_state: RootState) => (localStorage.getItem('fourB.accessToken')),
};

export const mutations = mutationTree(state, {
  setData: (_state, newValue: string) => (localStorage.setItem('fourB.hello', newValue)),
  setAccessToken: (_state, newValue: string) => (localStorage.setItem('fourB.accessToken', newValue)),
});

export const actions = actionTree(
  {state, getters, mutations},
  {
    resetTest({ commit }) {
      commit('setData', '');
    },
    logout({ commit }) {
      commit('setAccessToken', '');
    },
    refreshToken: async ({ commit, getters }) => {
      try {
        const response = await axios
          .get('/api/sign/refresh', {
            headers: {
              'Authorization': `Bearer ${getters.accessToken}`,
            }
          });
        const token = response.data.access_token;
  
        if (token) {
          commit('setAccessToken', token);
        } else {
          commit('setAccessToken', '');
        }
      } catch (error) {
          commit('setAccessToken', '');
      }
    }
  }
);

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    UserModule,
    EditModule,
  },
});
