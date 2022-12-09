import { mutationTree, actionTree, getterTree } from 'typed-vuex';
import axios from 'axios';

export const state = () => ({});

export const getters = getterTree(state, {
  username: (_state) => (localStorage.getItem('fourB.UserModule.username')),
  email: (_state) => (localStorage.getItem('fourB.UserModule.email')),
  avatar: (_state) => (localStorage.getItem('fourB.UserModule.avatar')),
  introduction: (_state) => (localStorage.getItem('fourB.UserModule.introduction')),
  site: (_state) => (localStorage.getItem('fourB.UserModule.site')),
  friends: (_state) => (localStorage.getItem('fourB.UserModule.friends')),
  field: (_state) => (localStorage.getItem('fourB.UserModule.field')),
});

export const mutations = mutationTree(state, {
  setData(_state, data: any) {
    const keies = [
      'username',
      'email',
      'avatar',
      'introduction',
      'created_datetime',
      'site', 
      'friends',
      'field'
    ]

    for (const key in data) {
      if (keies.includes(key)) {
        localStorage.setItem(`fourB.UserModule.${key}`, data[key]);
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

        if (data.success && data.data.length >= 1) {
          commit('setData', data.data[0]);

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
