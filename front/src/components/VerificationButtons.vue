<template>
  <div class="verification-buttons row p-3">
    <div class="col-lg-7 p-0">
      <div class="timestamp">
        <i class="fas fa-clock"/>
        Заявка,
        <span>{{ createdAt }}</span>
      </div>
    </div>
    <div class="col-lg-5">
      <div class="row py-3 py-lg-0">
        <div class="col-8 text-left">
          <div class="btn-group" role="group">
            <button @click="() => this.$emit('user-verified')" title="Верифицировать пользователя" type="button" class="btn btn-verify btn-sm btn-action"><i class="fas fa-user-shield"/></button>
            <button @click="() => this.$emit('user-canceled')" title="Отклонить верификацию" type="button" class="btn btn-dismiss btn-sm btn-action"><i class="far fa-window-close"/></button>
          </div>
        </div>
        <div class="col-4 text-right">
          <button @click="() => this.$emit('modal-opened')" title="Просмотр фото" type="button" class="btn btn-eye btn-sm btn-action"><i class="far fa-eye"/></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'VerificationButtons',
  props: ['created_at'],
  computed: {
    createdAt() {
      return moment(this.created_at).format('DD.MM.YY HH:mm');
    }
  }
};
</script>

<style scoped lang="scss">
.timestamp {
  color: #E48800;
}

.btn-verify {
  background: #6DBB4A;
}

.btn-dismiss {
  background: #E48800;
}

.btn-eye {
  display: inline-block;
  background: #41CAC0;
  margin-left: auto;
}
</style>