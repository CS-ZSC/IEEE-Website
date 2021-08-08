<template>
  <div class="ras">
    <about-us v-bind:data="data['about']" />
    <contact-us v-bind:contact="data['contact-us']"/>
    <committees-footer v-bind:data="data"/>
  </div>
</template>

<script>
import Database from '/database/database';
import AboutUsRas from '@/components/committees/AboutUsRas';
import CommitteesFooter from '@/components/committees/CommitteesFooter';
export default{

  components:{
    'about-us':AboutUsRas,
    'committees-footer':CommitteesFooter

  },

  data(){
    return{
      data: Database.committees.ras,

    }
  }
}

</script>
