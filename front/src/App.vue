<template>
  <div id="app">
    <b-container>
      <div class="d-flex flex-column align-items-center">
        <transition-group name="fade">
          <photo-item v-for="item in items" :key="item.photo_id" v-bind="item"/>
        </transition-group>
      </div>
    </b-container>
    <modal :visible="visible" @hide="hideModal" :prev-image="prevImage" :selfie-image="selfieImage"/>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import PhotoItem from '@/components/PhotoItem';
import Modal from '@/components/Modal';

export default {
  name: 'App',
  components: { Modal, PhotoItem },
  computed: {
    ...mapState({
      items: state => state.verificationItems,
      visible: state => state.modal.visible,
      prevImage: state => state.modal.images[0] || "",
      selfieImage: state => state.modal.images[1] || "",
    }),
  },
  methods: {
    ...mapMutations([
      'hideModal'
    ]),
  },
  mounted() {
    this.$store.dispatch('getAllData');
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.image-helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}


.btn-action {
  color: #fff;

  &:active, &:focus, &:hover {
    color: #fff;

  }
}

.fade-leave-active {
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}

.fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
  transform: translateY(-300%);
}

.fade-leave-active {
  position: absolute;
}

.fade-move {
  transition: transform 1s;
  transition-delay: .5s;
}
</style>
