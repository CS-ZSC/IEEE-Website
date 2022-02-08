<template>
<!-- <div class="card card-shadow" data-aos-once="true" data-aos="fade-down"> -->
<div class="card card-shadow h-100">
  <img class="card-img-top" style="fill:white;object-fit:fill;" :src="imgLink" :alt="imgAlt">
    <div class="card-body justify-content-between d-flex flex-column">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{text}}</p>
      <router-link :to="buttonLink" class="btn btn-primary" style="max-width:120px">{{buttonText}}</router-link>
      
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
    object-fit: cover;
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
</style>