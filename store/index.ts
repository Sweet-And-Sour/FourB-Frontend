import { getAccessorType, mutationTree, actionTree } from 'typed-vuex';
import * as UserModule from '~/store/UserModule';

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
  },
});
