<template>
  <b-modal size="xl" hide-footer id="photoModal" :visible="visible" @hide="(event) => this.$emit('hide', event)">
    <b-container :fluid="true">
      <b-row>
        <b-col lg="6">
          <span class="image-helper"/>
          <b-img class="img-fluid" :src="prevImage"/>
        </b-col>
        <b-col lg="6">
          <span class="image-helper"/>
          <b-img class="img-fluid" :src="selfieImage"/>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: ['visible', 'prevImage', 'selfieImage']
};
</script>

<style scoped>

</style>