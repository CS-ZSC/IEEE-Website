<template class="p-0">
  <b-row data-aos="flip-left" data-aos-delay="0" data-aos-duration="800" data-aos-easing="ease-in-quart" class="expanding-line">
    <hr>
  </b-row>
</template>

<script>
export default {
  name: 'ExpandingLine',
}
</script>

<style scoped>
hr {
  display: block;
  width: 30%;
  min-width: 500px;
  max-width: 720px;
  border-width: 5px;
  border-radius: 16px;
  background-color: #002855;
  margin-top: 0;
}
</style>