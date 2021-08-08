<template>
  <div class="activity" :style="backgroundStyles(backgroundColor)">
    <div class="activity-content">
      <p class="activity-duration">Date: {{ date }}</p>
      <img class="activity-image" :src="activityImage" :alt="activityImageAlt">
      <h3 class="activity-title">{{ title }}</h3>
      <p class="activity-description">{{ description }}</p>
    </div>
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
    activityImage: {
      type: String,
      default: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg"
    },
    activityImageAlt: {
      type: String,
      default: "Activity image"
    },
    date: {
      type: String,
      default: "TBA",
    },
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
  background-size: cover;
  padding: 20px;
  border-radius: 5px;
  height: 80vh;
  color: #002855;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.activity-duration {
  text-align: right;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #002855;
  text-decoration-thickness: 1px;
  text-underline-offset: 10px;
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