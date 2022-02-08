<template>
    <div class="carousel">
        <b-carousel 
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >

            <b-carousel-slide
                v-for="(item, index) in carousel"
                :key="index"
                :caption="item.caption"
                :text="item.text"
                :img-src="item.img"
            ></b-carousel-slide>

               
        </b-carousel>  
    </div>
</template>

<script>
export default {
    name:'Carousel',
    props:['carousel'],
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>

<style scoped>
.carousel{
  z-index: 0;
}

</style>