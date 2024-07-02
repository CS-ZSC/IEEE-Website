<template>
  <b-container class="container">
    <b-row data-aos="fade-up">
      <h2 class="centered-text font-weight-bold">Our Sponsors</h2>
    </b-row>
    <b-row>
      <b-col>
        <ExpandingLine />
      </b-col>
    </b-row>
    <div class="sponsor-container">
      <div v-for="(Version, VersionIndex) in Versions" :key="`sponsor-${VersionIndex}`">
        <b-row class="version-row pt-3 pb-3 justify-content-center" data-aos="fade-up">
          <h3 class="version">{{ VersionIndex }}</h3>
        </b-row>
        <div v-for="(type, typeIndex) in Version" :key="`year-${typeIndex}`">
          <b-row class="type-row justify-content-center">
            <b-col
                v-for="(sponsorDetails, sponsorDetailsIndex) in type"
                :key="`metal-${sponsorDetailsIndex}`"
                cols="12"
                md="2"
                class="sponsor-col"
            >
              <figure data-aos-delay="500" data-aos="fade-in" data-aos-once="true" class="figure">
                <img :src="sponsorDetails.imgLink" class="figure-img img-fluid rounded" :alt="sponsorDetails.name"/>
                <figcaption class="figure-caption">{{ sponsorDetails.name }}</figcaption>
              </figure>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import ExpandingLine from '../ExpandingLine.vue';
import json from '../../../database/database.json';

export default {
  components: {ExpandingLine},
  name: "MutexSponsors",
  data() {
    return {
      Versions: json.mutex.sponsors,
    };
  },
};
</script>

<style scoped>
figure {
  width: 150px;
  height: 150px;
  padding: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.centered-text {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.container {
  max-width: 1200px;
}

.speakers-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.version-row {
  width: 100%;
  text-align: center;
}

.version {
  font-weight: bold;
  font-size: 1.5em;
}

.type-row {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1em;
}

.sponsor-col {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
</style>
