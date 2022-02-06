<template>
  <div class="mutex-breif">
      <horizantal-card :title="title" :text="text" :imgLink="imgLink" :imgAlt="imgAlt"/>
  </div>
</template>

<script>
import HorizantalCard from '../Home/HomeCards/CardsTemplates/HorizantalCard'
export default {
  name: "MutexBreif",
  components: {
    HorizantalCard,
  },
  data() {
    return {
      title: "About Mutex",
      imgLink: "/images/Zag.jpg",
      imgAlt: "IEEE Mutex logo",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Pariatur voluptates omnis beatae sapiente. Doloribus laborum at dolores recusandae! 
            Distinctio minima beatae nobis nemo magnam laboriosam, eius a ipsam tenetur pariatur? 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptates omnis 
            beatae sapiente. Doloribus laborum at dolores recusandae! Distinctio minima 
            beatae nobis nemo magnam laboriosam, eius a ipsam tenetur pariatur?`,
    }
  }
}
</script>

<style scoped>
.mutex-breif {
  padding: 1em;
  margin: 1em;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
}

@media (max-width:960px) {
.mutex-breif {
  padding: 0.5em;
  margin: 0.5em;
}
}
</style>