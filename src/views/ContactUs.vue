
<template>
  <div class="ContactUs">
    <questions/>
    <contactus/>

  </div>
</template>

<script>
import contactus from '@/components/ContactUs/contactus.vue';
import questions from '@/components/ContactUs/questions.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default{
  name:'ContactUs',
  components:{
    contactus,
    questions,
  }
}
</script>
