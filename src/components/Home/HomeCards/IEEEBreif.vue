<template>
  <horizantal-card :title="title" :text="text" :imgLink="imgLink" :imgAlt="imgAlt"/>
</template>

<script>
import HorizantalCard from './CardsTemplates/HorizantalCard'
//import json from '../../../../database/database.json'

export default {
  name: "IEEEBreif",
  components: {
    HorizantalCard,
  },
  data() {
    return {
      title: "About IEEE",
      imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
      //imgLink: json.home.images['ieee-breif'],
      imgAlt: "IEEE ZSB logo",
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