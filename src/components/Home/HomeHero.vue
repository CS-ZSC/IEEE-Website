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
      <div v-for="(carousel_image, index) in carousel_images" :key="index">
        <b-carousel-slide :img-src="carousel_image" ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script scoped>
import json from '../../../database/database'

export default {
  name: "HomeHero",
  data () {
    return {
      carousel_images: [...json.home['carousel-imgs']]
    }
  }
}
</script>