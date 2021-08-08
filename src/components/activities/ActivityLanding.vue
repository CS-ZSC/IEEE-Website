<template>
    <div id="activity-landing" :style="backgroundImage(background)">
      <div id="activity-heading">
        <h1 data-aos="fade-up" data-aos-duration="4000" data-aos-offset="200" data-aos-easing="linear">
          {{text}}
        </h1>
      </div>
    </div>
</template>

<script>
export default {
  name: "ActivityLanding",
  props: {
      text: {
          type: String
      },
      background: {
          type: String
      }
  },
  methods: {
    backgroundImage(background) {
        console.log(background)
      return {
        "background-image": `url(${background})`,
      };
    }
  },
};
</script>

<style scoped>
#activity-landing {
  height: 100vh;
  background-size: cover;
  /* box-shadow: 0 7px 25px 0px #000; */
}

#activity-heading {
  color: #fff;
  top: 50%;
  position: absolute;
  width: 100%;
}

#activity-heading h1 {
  margin: 0;
  text-align: center;
}
</style>