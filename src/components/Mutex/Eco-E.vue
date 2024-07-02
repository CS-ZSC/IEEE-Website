<template>
  <div class="card card-shadow h-100">
    <img class="card-img-top" style="object-fit: cover;" :src="image" :alt="Alt">
    <div class="card-body d-flex flex-column justify-content-start">
      <h5 class="card-title">{{ title }}</h5>
      <div class="card-text text-justify flex-grow-1 fade-text" v-html="description"></div>
    </div>
  </div>
</template>

<script>
import json from '../../../database/database'
export default {
  name: "Eco-E",
  data() {
    return {
      title: json.mutex.competitions["Eco-E"].title,
      description: json.mutex.competitions["Eco-E"].description,
      image: json.mutex.competitions["Eco-E"].image,
      Alt: "FireFighting image",
    };
  },
  methods: {
    backgroundStyles(backgroundColor) {
      return {
        "background-color": `${backgroundColor}`,
      };
    },
  },
};
</script>

<style scoped>
.activity {
  background-color: transparent;
  background-size: cover;
  padding: 2vh;
  border-radius: 1%;
  min-height: 100vh;
  color: #002855;
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
  margin: 2em 1em;
  min-width: 45vh;
  justify-content: center;
  align-items: center;
}

.activity-duration {
  text-align: right;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #002855;
  text-decoration-thickness: 1px;
  text-underline-offset: 10px;
}
.activity-content {
  background-color: white;
  padding: 1em;
  border-radius: 1%;
  margin-top: 1em;
}
.activity-image {
  height: 30vh;
  width: 100%;
}

.activity-title {
  text-align: center;
  margin-top: 20px;
}

.activity-description {
  margin-top: 20px;
}
</style>