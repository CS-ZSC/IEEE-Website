<template>
  <div id="activities">
    <activity-landing text="Our Activities" background="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
    <section>
      <b-container class="activity-section">
        <h2 class="activity-section-heading" data-aos="fade-in">Courses</h2>
        <div
          class="activity-cards"
        >
          <b-row
            v-for="index in coursesData.length"
            :key="index"
          >
              <b-col class="activity-container" md="12" lg="6">
                <Activity
                :title="coursesData[index-1].title"
                :description="
                  coursesData[index-1].description
                "
                :date="coursesData[index-1].date"

                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="600"
              />
              </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <hr data-aos="flip-left" data-aos-duration="900">
    <section>
      <b-container class="activity-section">
        <h2 class="activity-section-heading" data-aos="fade-down">Workshops</h2>
        <div class="activity-cards">
          <b-row
            v-for="index in workshopData.length"
            :key="index"
          >
            <b-col class="activity-container" md="12" lg="6">
              <Activity
                :title="workshopData[index-1].title"
                :description="
                  workshopData[index-1].description
                "
                :date="workshopData[index-1].date"

                data-aos="flip-right" data-aos-duration="800"
              />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <home-footer/>
  </div>
</template>

<script>
import ActivityLanding from "../components/activities/ActivityLanding";
import Activity from "../components/activities/Activity";
import json from "../../database/database.json";
import HomeFooter from '@/components/HomeFooter'

export default {
  name: "Activities",
  components: {
    ActivityLanding,
    Activity,
    HomeFooter
  },
  data() {
    var courses = json.activities.courses;
    var workshops = json.activities.workshops;
    var projects = json.activities.projects;

    var i = 0;
    for (i = 0; i < courses.length; i++) {
      courses[i].id = i;
    }

    for (i = 0; i < workshops.length; i++) {
      workshops[i].id = i;
    }

    for (i = 0; i < projects.length; i++) {
      projects[i].id = i;
    }

    return {
      coursesData: courses,
      workshopData: workshops,
      projectsData: projects,
    };
  },
  methods: {
    getTranslatedId(id, index) {
      return id - 1 + (index - 1) * 3;
    },
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

.activity-section {
  padding: 50px 0;
  min-height: 100vh;
}

.activity-section-heading {
  text-align: center;
  margin-bottom: 20px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #002855;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
  color: #002855;
}

.activity-container {
  margin: auto;
}

.activity {
  margin: 15px 0;
}
</style>