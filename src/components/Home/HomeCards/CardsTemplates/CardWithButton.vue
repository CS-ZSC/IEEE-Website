<template>
  <div class="card card-shadow h-100">
    <img class="card-img-top" style="object-fit: cover;" :src="imgLink" :alt="imgAlt">
    <div class="card-body d-flex flex-column justify-content-start">
      <h5 class="card-title">{{ title }}</h5>
      <div class="card-text text-justify flex-grow-1 fade-text" v-html="text"></div>
      <router-link :to="buttonLink" class="btn btn-primary mt-2" style="max-width:120px">{{ buttonText }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWithButton",
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
      default: "Some quick example text"
    },
    imgLink: {
      type: String,
    },
    imgAlt: {
      type: String,
      default: "card image",
    },
    buttonText: {
      type: String,
      default: "Learn More",
    },
    buttonLink: {
      type: String,
      default: "#",
    },
  }
}
</script>

<style scoped>
.card-img-top {
  max-height: 500px;
}

.card {
  background-color: transparent;
}

.card-body {
  background-color: white;
}

.btn {
  background-color: #00629B;
}

/* Define fading effect */
.fade-text {
  position: relative;
  overflow: hidden;
}

.fade-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px; /* Adjust the height of the fade */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white); /* Adjust the gradient as needed */
  pointer-events: none; /* Ensure the gradient doesn't interfere with mouse events */
}
</style>
