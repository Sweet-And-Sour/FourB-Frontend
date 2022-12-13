import { mutationTree, actionTree, getterTree } from 'typed-vuex';

export const state = () => ({});

export const getters = getterTree(state, {
  title: (_state) => {
    const value = localStorage.getItem('fourB.EditModule.title');
    return value == null ? '' : value;
  },
  contents: (_state) => {
    const value = localStorage.getItem('fourB.EditModule.contents');
    return value == null ? '' : value;
  },
  category: (_state) => {
    const value = localStorage.getItem('fourB.EditModule.category');
    return value == null ? '' : value;
  },
  tags: (_state) => {
    const tags = localStorage.getItem('fourB.EditModule.tags');
    return tags == null ? [] : JSON.parse(tags);
  },
  files: (_state) => {
    const files = localStorage.getItem('fourB.EditModule.files');
    return files == null ? [] : JSON.parse(files);
  },
  thumbnail: (_state) => {
    const value = localStorage.getItem('fourB.EditModule.thumbnail');
    return value == null ? '' : value;
  },
});

export const mutations = mutationTree(state, {
  setTitle: (_state, newValue: string) => (localStorage.setItem('fourB.EditModule.title', newValue)),
  setContents: (_state, newValue: string) => (localStorage.setItem('fourB.EditModule.contents', newValue)),
  setCategory: (_state, newValue: string) => (localStorage.setItem('fourB.EditModule.category', newValue)),
  setTags: (_state, newValue: Array<String>) => {
    localStorage.setItem('fourB.EditModule.tags', JSON.stringify(newValue));
  },
  setFiles: (_state, newValue: any) => {
    localStorage.setItem('fourB.EditModule.files', JSON.stringify(newValue));
  },
  setThumbnail: (_state, newValue: string) => (localStorage.setItem('fourB.EditModule.thumbnail', newValue)),
});

export const actions = actionTree(
  {state, getters, mutations},
  {
    reset({ commit }) {
      commit('setTitle', '');
      commit('setContents', '');
      commit('setCategory', '');
      commit('setTags', []);
      commit('setFiles', []);
      commit('setThumbnail', '');
    }
  }
);

