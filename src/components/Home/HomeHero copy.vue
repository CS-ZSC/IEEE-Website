<template>
  <div class="hero">
<!--     <div data-aos-once="true" data-aos="fade-up" class="hero-text">
      <h2>
        <strong>IEEE EXPERIENCE</strong>
        <br>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis magni delectus quae quo nulla. Ea corporis pariatur tenetur architecto!</small>
      </h2>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomeHero'
}
</script>

<style scoped>
.hero{
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/bluredhomehero.jpg");
  background-size: cover;
  width: 100%;
  height: 90vh;
  min-height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-text {
  display: block;
  text-align: center;
  color: white;
  overflow: hidden;
}

h2 {
  font-size: 3em;
  padding: 2em 5em;
}


@media (max-width: 1000px) {
  h2 {
    font-size: 2em;
    padding: 2em 1em;
  }
}
</style>