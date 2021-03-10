<template>
  <div class="photo-card shadow-sm">
    <h1>{{ photo_id }}</h1>
    <div class="photo-card__content">
      <div class="photo-card__image-block">
        <div>Фото профиля</div>
        <span class="image-helper"/>
        <img class="photo-card__image" :src="photo_prev" alt="Фото профиля">
      </div>
      <div class="photo-card__image-block">
        <div>Селфи</div>
        <span class="image-helper"/>
        <img class="photo-card__image" :src="selfie_prev" alt="Селфи">
      </div>
    </div>
    <verification-buttons v-on:user-verified="onUserVerificate"
                          v-on:user-canceled="onUserCancel"
                          v-on:modal-opened="onModalShow"
                          :created_at="created_at"/>
    <profile-bar v-on:user-banned="onUserBan"
                 v-on:device-banned="onDeviceBan"
                 v-bind="user"/>
  </div>
</template>

<script>
import VerificationButtons from '@/components/VerificationButtons';
import ProfileBar from '@/components/ProfileBar';
import { mapActions, mapMutations } from 'vuex';


export default {
  name: 'PhotoItem',
  components: { ProfileBar, VerificationButtons },
  props: ['photo_id', 'photo_prev', 'selfie_prev', 'created_at', 'user'],
  computed: {
    data: function () {
      return { photo_id: this.photo_id, user_id: this.user.user_id };
    },
  },
  methods: {
    ...mapActions([
      'verificate',
      'cancel',
      'banDevice',
      'banUser'
    ]),
    ...mapMutations([
       'showModal'
    ]),
    onUserVerificate() {
      this.verificate(this.data);
    },
    onUserCancel() {
      this.cancel(this.data);
    },
    onDeviceBan() {
      this.banDevice(this.data);
    },
    onUserBan() {
      this.banUser(this.data);
    },
    onModalShow() {
      this.showModal({prev_photo: this.photo_prev, selfie_photo: this.selfie_prev});
    }
  }

};
</script>

<style scoped lang="scss">
.photo-card {
  max-width: 380px;
  box-sizing: border-box;
  padding: 20px 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;

  &__image {
    padding: 10px;
    max-height: 270px;
    max-width: 186px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__image-block {
    img {
      vertical-align: middle;
    }

    @media(max-width: 576px) {
      margin-bottom: 30px;
    }
  }
}
</style>