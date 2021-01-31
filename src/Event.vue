<template>
  <div id="app">
    <appheader :logo="logo"/>
    <slider :src="src" />
    <about :about="about" :name="eventname" :place="where" :dates="when" :vision="vision" :mission="mission" :goals="goals" 
    :session="sessions" :workshop="workshop" :casestudy="caseStudy" />
    <speakers :speakers="speakers"  />
    <partners :partners="partners"/>
    <gallery :gallery="gallery"/>
    <!-- {{x}} -->
    <div >
    </div>
  </div>
</template>

<script>
import slider from "@/components/slider";
import appheader from "@/components/Appheader";
import about from "@/components/About";
import speakers from "@/components/speakers";
import partners from "@/components/partners";
import gallery from "@/components/gallery";
import data from "../database/database.json";


// import Appheader from './components/Appheader.vue';
export default {
  name: 'event',
  components:{
   appheader,
   slider,
   about,
   speakers,
   partners,
   gallery
  },
  data(){
    return{
     logo:data.events.logo,
     src:data.events.img ,
      about:data.events.about,
      eventname:data.events.name,
      where:data.events.where,
      when:data.events.when,
      vision:data.events.vision,
      mission:data.events.mission,
      goals:data.events.goals,
      sessions:data.events.sessions,
      workshop:data.events.workshop,
      caseStudy:data.events.casestudy,
      partners:data.events.partners,
      speakers:data.events.speakers,
      gallery:data.events.gallery
    }
  },
  
}
</script>

// Global Style
<style>
.center{text-align: center;}
.padding{padding: 50px;}
.size{font-size: 80px;}
.flex{justify-content: center; flex-direction: row;}
.margin{margin-bottom: 40px;}
</style>
