<template>
  <div class="MemberShip">
    <Benefits/>
    <Socities/>
    <becomeAmember/>

  </div>
</template>

<script>
import Benefits from '@/components/MemberShip/Benefits.vue';
import Socities from '@/components/MemberShip/Socities.vue';
import becomeAmember from '@/components/MemberShip/becomeAmember.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default{
  name:'MemberShip',
  components:{
    Benefits,
    Socities,
    becomeAmember,
  }
}
</script>
