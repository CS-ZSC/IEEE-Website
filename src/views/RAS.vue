<template>
  <div class="ras">
    <about-us v-bind:data="data['about']" />
    <contact-us v-bind:contact="data['contact-us']"/>
  </div>
</template>

<script>
import Database from '/database/database';
import AboutUsRas from '@/components/committees/AboutUsRas';
export default{

  components:{
    'about-us':AboutUsRas,
  },

  data(){
    return{
      data: Database.committees.ras,

    }
  }
}

</script>
