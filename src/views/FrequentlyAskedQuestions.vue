
<template>
  <div class="FrequentlyAskedQuestions">
    <questions/>
  </div>
</template>

<script>
import questions from '@/components/FrequentlyAskedQuestions/questions.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default{
  name:'FrequentlyAskedQuestions',
  components:{
    questions,
  }
}
</script>
