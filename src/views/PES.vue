<template>
  <div class="pes">
    <carousel v-bind:carousel="data['carousel']"/>
    <about-us v-bind:data="data" v-bind:img="img" />
    <team v-bind:data="data['team']"/>
<!--    <contact-us v-bind:contact="data['contact-us']"/>-->
  </div>
</template>

<script>
import Database from '/database/database';
import AboutUs from '@/components/committees/AboutUs';
import Carousel from '@/components/committees/Carousel';
import Team from '@/components/committees/Team';
// import contactus from '@/components/ContactUs/contactus';


export default {

  components: {
    'about-us': AboutUs,
    'carousel': Carousel,
    'team': Team,
    // 'contact-us':contactus
  },


  data() {
    return {
      data: Database.committees.pes,
      img: require('../components/committees/' + Database.committees.pes.img)
    }
  }
}

</script>


