<template>
  <div class="about-section">
    <div class="background text-center">
      <img :src="img" class="responsive-img pt-2 shadow-lg" alt="CS logo">
    </div>

    <b-container fluid="xl" class="left">
      <b-row>
        <b-col data-aos="fade-up">
          <h3 class="text-center mt-4">about us</h3>
          <b-row>
            <b-col>
              <expanding-line />
            </b-col>
          </b-row>
          <p class="text-center mt-2">{{ data['about']['about-us'] }}</p>
        </b-col>
      </b-row>
      <b-row align-h="center" align-content="center" align-v="center" class="pt-0">
        <b-col data-aos="fade-up justify-content-center">
          <h3 class="text-center">Our Tracks</h3>
          <b-row>
            <b-col>
              <expanding-line />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row data-aos="flip-left" class="pb-2">
        <hr>
      </b-row>
      <b-row align-h="center">
        <b-container fluid='xl'>
          <b-row class="justify-content-center">
            <b-col md="6" class="py-0 px-0 px-md-3 mb-3" v-for="(track, index) in data['tracks']" :key="index">
              <b-card data-aos="fade-up"
                      :title="track.name"
                      :img-src="track.img"
                      :img-alt="track.name"
                      img-top
                      tag="article"
                      class="card justify-content-center equal-height"
                      style="min-height: 100%; box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px">
                <b-card-text>
                  {{ track.description }}
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ExpandingLine from "@/components/ExpandingLine.vue";

export default {
  props: ['data', 'img'],
  components: {
    ExpandingLine
  },
  data() {
    return {
      url: './CS.png',
    }
  }
}
</script>

<style scoped>
h3 {
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.text-center {
  margin-top: 50px;
}

img {
  max-width: 1400px;
}
.responsive-img {
  border-radius: 50px;
  height: auto;
  max-width: 100%;
}

@media (max-width: 768px) {
  .responsive-img {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .responsive-img {
    max-width: 100%;
    height: auto;
  }
}

.b-row {
  display: flex;
  flex-wrap: wrap;
}

.equal-height .b-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.equal-height .b-card-text {
  flex-grow: 1;
}
</style>
