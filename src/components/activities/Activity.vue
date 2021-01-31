<template>
  <div class="activity" :style="backgroundStyles(backgroundImage, backgroundColor)">
    <p class="activity-duration">Date: {{ date }}</p>
    <h3 class="activity-title">{{ title }}</h3>
    <p class="activity-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Activity",
  props: {
    title: {
      type: String,
      default: "Activity",
    },
    description: {
      type: String,
      default: "This is an activity",
    },
    backgroundColor: {
      type: String,
      default: "#FFF",
    },
    backgroundImage: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: "TBA",
    },
  },
  methods: {
    backgroundStyles(backgroundImage, backgroundColor) {
      return {
        "background-image": `url(${backgroundImage})`,
        "background-color": `${backgroundColor}`,
      };
    },
  },
};
</script>

<style scoped>
.activity {
  background-size: cover;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
}

.activity-duration {
  text-align: right;
}

.activity-title {
  text-align: center;
}
</style>