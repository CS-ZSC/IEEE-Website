<template>
  <div class="justify-content-center ">
    <activity-landing text="Our Activities" :background="activitiesHeroLink"/>
    <b-container fluid class="activity-section card-c cards-container " mx="0" style="margin-top: 5em">
      <h2 class="activity-section-heading justify-content-center" data-aos="fade-in">Events & Workshops</h2>
      <b-row data-aos="flip-left" class="pb-2">
        <hr>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="4" class="py-2 px-0 px-md-3 activity" v-for="(event, index) in eventsData" :key="index">
          <Activity
              :title="event.title"
              :description="event.description"
              :date="event.date"
              :activityImage="event['img-link']"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="600"
          />
        </b-col>
      </b-row>
    </b-container>
    <hr data-aos="flip-left " data-aos-duration="900" style="margin-top: 3em">
  </div>
</template>

<script>
import ActivityLanding from "../components/activities/ActivityLanding";
import Activity from "../components/activities/Activity";
import json from "../../database/database.json";

export default {
  name: "Activities",
  components: {
    ActivityLanding,
    Activity,
  },
  data() {
    const events = json.activities.events;

    return {
      eventsData: events,
      activitiesHeroLink: json.activities['hero-link']
    };
  },
};
</script>

<style scoped>
hr {
  border: 3px solid #002855;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
}

#activities {
  background-color: whitesmoke;
}

.activity-section-heading {
  text-align: center;
  color: #002855;
  font-size: 2em;
  font-weight: bold;
}
</style>
