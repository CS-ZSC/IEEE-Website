<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="5000"
      background="#ababab"
      img-height="1024"
      img-width="480"
      style="text-shadow: 1px 1px 2px #333; max-height: 95vh;"
    >
      <div v-for="(landing, index) in landings" :key="index">
        <b-carousel-slide :img-src="landing" ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script scoped>
import json from '../../../database/database'

export default {
  name: "MutexHero",
  data () {
    return {
      landings: [json.mutex.landing.img]
    }
  }
}
</script>