<template>
  <div id="activities">
    <!-- TODO Add navbar component -->
    <div id="activity-landing">
      <div id="activity-heading">
        <h1 data-aos="fade-up" data-aos-duration="4000" data-aos-offset="200" data-aos-easing="linear">
          Explore what we do
        </h1>
      </div>
    </div>
    <section>
      <b-container class="activity-section">
        <h2 class="activity-section-heading" data-aos="fade-in">Courses</h2>
        <div
          class="activity-cards"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="300"
        >
          <b-row
            v-for="index in Math.ceil(coursesData.length / 3) + 1"
            :key="index"
          >
            <b-col sm="12" md="4" v-for="id in 3" :key="id">
              <Activity
                class="activity"
                v-if="getTranslatedId(id, index) < coursesData.length"
                :title="coursesData[getTranslatedId(id, index)].title"
                :description="
                  coursesData[getTranslatedId(id, index)].description
                "
                :date="coursesData[getTranslatedId(id, index)].date"
              />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <section>
      <b-container class="activity-section">
        <h2 class="activity-section-heading" data-aos="fade-down">Workshops</h2>
        <div class="activity-cards" data-aos="flip-right" data-aos-duration="800">
          <b-row
            v-for="index in Math.ceil(workshopData.length / 3) + 1"
            :key="index"
          >
            <b-col sm="12" md="4" v-for="id in 3" :key="id">
              <Activity
                class="activity"
                v-if="getTranslatedId(id, index) < workshopData.length"
                :title="workshopData[getTranslatedId(id, index)].title"
                :description="
                  workshopData[getTranslatedId(id, index)].description
                "
                :date="workshopData[getTranslatedId(id, index)].date"
                :backgroundColor="'#eee'"
              />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <section>
      <b-container class="activity-section">
        <h2
          class="activity-section-heading"
          data-aos="fade-right"
        >
          Projects
        </h2>
        <div class="activity-cards" data-aos="zoom-in-up">
          <b-row
            v-for="index in Math.ceil(projectsData.length / 3) + 1"
            :key="index"
          >
            <b-col sm="12" md="4" v-for="id in 3" :key="id">
              <Activity
                class="activity"
                v-if="getTranslatedId(id, index) < projectsData.length"
                :title="projectsData[getTranslatedId(id, index)].title"
                :description="
                  projectsData[getTranslatedId(id, index)].description
                "
                :date="projectsData[getTranslatedId(id, index)].date"
              />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import Activity from "../components/activities/Activity";
import json from "../../database/database.json";

export default {
  name: "Activities",
  components: {
    Activity,
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
#activities {
  background-color: #eee;
}

#activity-landing {
  height: 100vh;
  background-image: url("../assets/activities/background.jpg");
  background-size: cover;
  box-shadow: 0 7px 3px -3px #888;
}

#activity-heading {
  color: #fff;
  top: 50%;
  position: absolute;
  width: 100%;
}

#activity-heading h1 {
  margin: 0;
  text-align: center;
}

.activity-section {
  padding: 50px 0;
  min-height: 100vh;
}

section:nth-child(odd) {
  background-color: #fff;
  box-shadow: 0px 2px 2px #888, 0px -2px 2px #888;
}

.activity-section-heading {
  text-align: center;
  margin-bottom: 20px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #009ca6;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
}

.activity {
  margin: 15px 0;
}

/* SCROLL ANIMATIONS */
.before-enter.horizontal-slide {
  opacity: 0;
  transform: translateX(-400px);
  transition: all 0.5s linear;
}

.before-enter.vertical-slide-up {
  opacity: 0;
  transform: translateY(400px);
  transition: all 0.3s linear;
}

.before-enter.vertical-slide-down {
  opacity: 0;
  transform: translateY(-100px);
  transition: all 0.5s linear;
}

.before-enter.fade-in {
  opacity: 0;
  transition: all 0.5s linear;
}

.enter.horizontal-slide,
.enter.vertical-slide-up,
.enter.vertical-slide-down,
.enter.fade-in {
  opacity: 1;
  transform: translateX(0px);
}
</style>