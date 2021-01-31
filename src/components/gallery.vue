<template>
    <div>
        <a name="gallery"></a>
        <div class="background padding">
            <b-container>
                <h2 class="center margin" data-aos="fade-down">Gallery</h2>
            <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
    
  >
    <b-carousel-slide
    v-for="img in gallery" :key="img.index"
      
      :img-src="img"
    ></b-carousel-slide>
  </b-carousel>
</div>
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    name:"gallery",
    props:["gallery"]
}
</script>
<style scoped>
.background{background-color: darkgray;}
</style>