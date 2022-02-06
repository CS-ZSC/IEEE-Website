<template>
  <b-container class="container">
    <b-row data-aos="fade-up">
      <h2 class="centered-text">Our speakers</h2>
    </b-row>
    <b-row >
      <b-col>
        <ExpandingLine/>
      </b-col>
    </b-row>
    <div class="speakers-container">
      <div v-for="(speaker, index) in Speakers" :key="index">
        <figure data-aos-delay="500" data-aos="fade-in" data-aos-once="true" class="figure">
          <img :src="speaker.imgSrc" class="figure-img img-fluid rounded" :alt="speaker.details"/>
          <figcaption class="figure-caption">{{speaker.details}}</figcaption>
        </figure>
      </div>
    </div>
  </b-container>
</template>

<script>
import ExpandingLine from '../ExpandingLine.vue'
export default {
  components: { ExpandingLine },
  name: "MutexSpeakers",
  data() {
    return {
      Speakers: [
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
        {
          details: "linus tech tips",
          imgSrc: "/images/linus.jpg",
        },
      ]
    }
  }
}
</script>

<style scoped>
figure {
  width: 150px;
  height: 150px;
  padding: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.centered-text {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.container {
  max-width: 1200px;
}

.speakers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>