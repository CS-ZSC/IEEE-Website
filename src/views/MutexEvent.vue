<template>
  <div class="mutex-event">
    <mutex-hero/>
    <div @click="handleRegisterClick" class="register-block">
      Register Now
    </div>
    <mutex-breif/>
    <div class="space"/>
    <mutex-cards-container/>
    <div class="space"/>
    <div class="space"/>
    <!-- <mutex-history/> -->
    <!-- <div class="space"/> -->
    <!-- <mutex-speakers/> -->
    <!-- <div class="space"/> -->

    <!-- Register Now Block -->

  </div>
</template>

<script>
import MutexHero from '@/components/Mutex/MutexHero'
import MutexBreif from '@/components/Mutex/MutexBreif'
import MutexCardsContainer from '../components/Mutex/MutexCardsContainer.vue'

export default {
  name: 'MutexEvent',
  components: {
    MutexHero,
    MutexBreif,
    MutexCardsContainer,
  },
  methods: {
    handleRegisterClick() {
      // Implement your registration logic here
      // For example, navigate to a registration page or show a registration form
      console.log('Clicked Register Now block');
    }
  }
}
</script>

<style scoped>
.space {
  height: 2em;
  width: 100%;
}

.register-block {
  background-color: #2A1641; /* Normal state color */
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-block:hover {
  background-color: #3D3583; /* Hover state color */
}
</style>
