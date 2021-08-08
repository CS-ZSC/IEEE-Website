<template>
  <div class="cs">
    <carousel v-bind:carousel="data['carousel']"/>
    <about-us v-bind:data="data['about']" />
    <team v-bind:data="data['team']"/>
    <contact-us v-bind:contact="data['contact-us']"/>
    <committees-footer v-bind:data="data"/>
  </div>
</template>

<script>
import Database from '/database/database';
import AboutUs from '@/components/committees/AboutUs';
import CommitteesFooter from '@/components/committees/CommitteesFooter';


export default{

  components:{
    'about-us':AboutUs,
    'committees-footer':CommitteesFooter

  },



  data(){
    return{
      data: Database.committees.cs,

    }
  }
}

</script>

<style scoped>


</style>
