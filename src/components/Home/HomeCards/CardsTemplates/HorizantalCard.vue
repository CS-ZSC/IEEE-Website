<template>
  <div class="card-container">
    <div  class="overflow-hidden card">
      <b-row data-aos-once="true" data-aos="flip-down" no-gutters>
        <b-col md="6" class="img-holder">
            <b-card-img class="round-0" :src="imgLink" style="border:none;" :alt="imgAlt"></b-card-img>
        </b-col>
        <b-col class="text-card" md="6">
          <b-card-body :title="title">
            <b-card-text>
              {{text}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HorizantalCard",
  props: {
    title: String,
    imgLink: String,
    imgAlt: {
      type: String,
      default: "card image",
    },
    text: String,
  }
}
</script>

<style scoped>
  .card-container {
    padding-top: 5em;
  }
  .card {
    margin-left: auto;
    margin-right: auto;
    border-color: #ffffff;
    background-color: transparent;
    border: none;
    border-radius: 0 !important;
    align-content: center;
    justify-content: center;
    color: white;
    font-size: 1em;
  }
  .text-card {
    align-self: center;
    color: black;
  }
  .img-holder {
    display: flex;
    align-items: center;
  }

  @media (max-width: 960px) {
    .card-container {
      margin: 0;
      padding: 0;
      width: 100%;
    }
    .card {
      border-style: none;
      border-radius: 0 !important;
      margin: 0;
      padding: 0;
    }
  }
</style>