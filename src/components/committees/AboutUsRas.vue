<template>
    <div class="about-section">
      <center class="background">
        <img src="./ras.png">
      </center>
        <b-container fluid="xl" class="text-center" >

            <b-row align-h="center" >
                <b-col data-aos="fade-up">
                    <h3>about us</h3>
                    <p>{{data['about-us']}}</p>
                </b-col>
            </b-row>

            <!-- <b-row align-h="center">
                <b-col md="4" sm="6" cols="auto">
                        <b-card  data-aos="fade-up"
                            title="Our Vision"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 100%;"
                            class="mb-3 card">

                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                </b-col>
                <b-col md="4" sm="6" cols="auto">
                        <b-card  data-aos="fade-up"
                            title="Our Mission"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 100%;"
                            class="mb-3 card">

                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                </b-col>
                <b-col md="4" sm="6" cols="auto">
                        <b-card  data-aos="fade-up"
                            title="Our Plan"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 100%;"
                            class="mb-3 card">

                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                </b-col>
            </b-row> -->

        </b-container>

        <b-container fluid='xl'>
          <b-row>
            <b-col md="4" class="py-2 px-0 px-md-3 activity" v-for="(activity, index) in Activities" :key="index">
                <card-with-button :title="activity.title" :text="activity.text" :buttonLink="activity.pageLink" :imgLink="activity.imgLink" />
            </b-col>
          </b-row>
        </b-container>

    </div>

</template>

<script>
import CardWithButton from '../Home/HomeCards/CardsTemplates/CardWithButton.vue'

export default {
    props:['data'],
    components: {
      CardWithButton,
    },
    data(){
        return {
          url: '/home/marimemad/projects/cs_ieee/Web-training/ieee-website/IEEE-Website/src/components/committees/ras.png',
          Activities: [
            {
              imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
              title: "Activity Title",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
              title: "Activity Title",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
              title: "Activity Title",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
              title: "Activity Title",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
              title: "Activity Title",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              imgLink: "https://ieee-zsb.org/images/Sliders/Final1300800.jpg",
              title: "Activity Title",
              text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              pageLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
          ]
        }}

}
</script>

<style scoped>

h3 {
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
}

.text-center{
  margin-top:50px;
}
img{
margin-top:55px;
  max-width: 1400px;
}
.activity{
  max-width: 500px;
  margin: auto;
}

</style>
