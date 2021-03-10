<template>
  <div class="profile-bar">
    <div class="media">
      <img class="profile-bar__avatar" :src="avatar" :alt="name"/>
      <div class="media-body profile-bar__body">
        <h5>{{ name }} ({{ years }})</h5>
        <div class="profile-bar__buttons">
          <div class="btn-group" role="group">
            <button @click="() => this.$emit('user-banned', user_id)" title="Бан пользователя" type="button" class="btn btn-ban-user btn-sm btn-action"><i
                class="fas fa-portrait mr-2"/><i class="fas fa-ban"/></button>
            <button @click="() => this.$emit('device-banned', user_id)" title="Бан устройства" type="button" class="btn btn-ban-device btn-sm btn-action"><i
                class="fas fa-mobile-alt mr-2"></i><i class="fas fa-ban"/></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBar',
  props: ['avatar', 'city', 'name', 'years', 'user_id']
};
</script>

<style scoped lang="scss">
.profile-bar {
  padding: 15px 20px;

  &__body {
    text-align: left;
  }

  &__avatar {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
    object-position: center center;
    margin-right: 20px;
  }

  &__buttons {
    text-align: right;
  }
}

.btn-ban-user {
  background: #E48800;
}

.btn-ban-device {
  background: #EC6459;
}
</style>