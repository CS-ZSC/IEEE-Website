<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-height="1024"
      img-width="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide img-src="/images/croped25to10.jpg" ></b-carousel-slide>
      <b-carousel-slide img-src="/images/alex2.png"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped>
</style>