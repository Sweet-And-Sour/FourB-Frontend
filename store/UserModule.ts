import { mutationTree, actionTree, getterTree } from 'typed-vuex';
import axios from 'axios';

export const state = () => ({
  "username": '',
  "email": '',
  "avatar": '',
  "introduction": '',
  "created_datetime": '',
  "site": '',
  "friends": '',
  "field": ''
});

export const getters = getterTree(state, {
  username: (state) => (state.username),
  email: (state) => (state.email),
  avatar: (state) => (state.avatar),
  introduction: (state) => (state.introduction),
  site: (state) => (state.site),
  friends: (state) => (state.friends),
  field: (state) => (state.field),
});

export const mutations = mutationTree(state, {
  setData(state, data: any) {
    for (const key in data) {
      if (key in state) {
        (state as any)[key] = data[key];
      }
    }
  }
});

export const actions = actionTree(
  {state, getters, mutations},
  {
    reset({ commit }) {
      commit('setData', {
        "username": '',
        "email": '',
        "avatar": '',
        "introduction": '',
        "created_datetime": '',
        "site": '',
        "friends": '',
        "field": ''
      });
    },
    async fetch({ commit }, username: string) {
      try {
        const response = await axios.get(`/api/user/${username}`);
        const data = response.data;

        if (data.success) {
          commit('setData', data.data);

        } else {
          return false;
        }
      } catch (error) {
        return false;
      }

      return true;
    }
  }
);
