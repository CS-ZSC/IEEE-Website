<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-height="1024"
      img-width="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide img-src="/images/backgrounds/homehero.jpg" ></b-carousel-slide>
      <b-carousel-slide img-src="/images/backgrounds/alex.png"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped>
</style>