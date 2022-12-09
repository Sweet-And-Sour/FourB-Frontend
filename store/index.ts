import { getAccessorType, mutationTree, actionTree } from 'typed-vuex';
import * as UserModule from '~/store/UserModule';

export const state = () => ({
  hello: 'world',
  accessToken: '',
});

type RootState = ReturnType<typeof state>

export const getters = {
  test: (state: RootState) => (state.hello),
  accessToken: (state: RootState) => (state.accessToken),
};

export const mutations = mutationTree(state, {
  setData: (state, newValue: string) => (state.hello = newValue),
  setAccessToken: (state, newValue: string) => (state.accessToken = newValue),
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
