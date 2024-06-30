<template>
  <b-container fluid class="cards-container" mx="0">
    <b-row class="justify-content-center pb-0 pt-4">
      <h2 class="font-weight-bold">About Us</h2>
    </b-row>
    <b-row data-aos="flip-left" class="pb-2">
      <hr>
    </b-row>
    <p style="justify-content: center !important;align-content: center ">{{ about }}</p>
    <b-row align-h="center">
      <b-col md="4" sm="6" cols="auto" class=" text-center">
        <b-card data-aos="fade-up"
                title="Our Vision"
                title-tag="h3"
                :img-src="vision_image"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 100%;"
                class="mb-3 mt-5 card border-0">
          <b-card-text class="text-left">
            {{ vision_text }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col md="4" sm="6" cols="auto" class=" text-center">
        <b-card data-aos="fade-up"
                title="Our Mission"
                title-tag="h3"
                :img-src="mission_image"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 100%;"
                class="mb-3 mt-5 card border-0">
          <b-card-text class="text-left">
            {{ mission_text }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>

import json from '../../../database/database'

export default {
  name: "HomeAboutUs",
  data() {
    return {
      vision_text: json.home.vision.text,
      vision_image: json.home.vision.img,
      mission_text: json.home.mission.text,
      mission_image: json.home.mission.img,
      about: json.home.about,
    }
  }
}
</script>

<style scoped>
section {
  background-color: whitesmoke;
  color: #002855;
  padding: 0 0 0 0;
  margin: 0 0 25px;
}

h2 {
  margin: 0;
}

.cards-container {
  margin: 0 auto auto;
  max-width: 1200px;
}

hr {
  display: block;
  width: 50%;
  border-width: 5px;
  border-radius: 16px;
  background-color: #002855;
}

@media (min-width: 1000px) {
  .card-shadow {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
}
</style>
