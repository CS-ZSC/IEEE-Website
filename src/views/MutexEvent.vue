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
    <mutex-competitions/>
    <div class="space"/>
    <mutex-history/>
    <div class="space"/>

    <!-- Conditionally render MutexSponsors based on screen width -->
    <MutexSponsors v-if="!isMobile"/>

    <!-- <mutex-speakers/> -->

  </div>
</template>

<script>
import MutexHero from '@/components/Mutex/MutexHero'
import MutexBreif from '@/components/Mutex/MutexBreif'
import MutexCardsContainer from '../components/Mutex/MutexCardsContainer.vue'
import MutexHistory from "@/components/Mutex/MutexHistory.vue";
// import MutexSpeakers from "@/components/Mutex/MutexSpeakers.vue";
import MutexSponsors from "@/components/Mutex/MutexSponsors.vue";
import MutexCompetitions from "@/components/Mutex/MutexCompetitions.vue";

export default {
  name: 'MutexEvent',
  components: {
    MutexSponsors,
    // MutexSpeakers,
    MutexHero,
    MutexBreif,
    MutexCardsContainer,
    MutexHistory,
    MutexCompetitions,
  },
  data() {
    return {
      isMobile: false // Initially assume it's not mobile
    };
  },
  mounted() {
    // Check if the screen width is less than or equal to 768px (adjust as needed)
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    handleRegisterClick() {
      window.open("https://ieee-zsb-mutex.com/", "_blank");
    },
    checkScreenWidth() {
      this.isMobile = window.innerWidth <= 768; // Adjust breakpoint as per your design needs
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

/* Media query to hide sponsors on phones */
@media (max-width: 768px) {
  .mutex-event .mutex-sponsors {
    display: none;
  }
}
</style>
