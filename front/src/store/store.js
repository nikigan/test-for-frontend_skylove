import Vue from 'vue';
import Vuex from 'vuex';
import { banDevice, banUser, cancel, getAllData, verificate } from '@/services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    verificationItems: [],
    modal: {
      visible: false,
      images: []
    }
  },
  mutations: {
    deleteItem(state, payload) {
      const { photo_id } = payload;
      state.verificationItems = state.verificationItems.filter(item => item.photo_id === photo_id);
    },
    setItems(state, payload) {
      state.verificationItems = payload.items;
    },
    showModal(state, { prev_photo, selfie_photo }) {
      state.modal.visible = true;
      state.modal.images = [ prev_photo, selfie_photo];
    },
    hideModal(state) {
      state.modal.visible = false;
      state.modal.images = [];
    }
  },
  actions: {
    async getAllData({ commit }) {
      const { data: { data } } = await getAllData();
      commit('setItems', { items: data });
    },
    async verificate({ dispatch }, payload) {
      await verificate(payload);
      dispatch('getAllData');
    },
    async banUser({ dispatch }, payload) {
      await banUser(payload);
      dispatch('getAllData');
    },
    async banDevice({ dispatch }, payload) {
      await banDevice(payload);
      dispatch('getAllData');
    },
    async cancel({ dispatch }, payload) {
      await cancel(payload);
      dispatch('getAllData');
    },

  }
});