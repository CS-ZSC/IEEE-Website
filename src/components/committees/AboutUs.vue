<template>
    <div class="about-section">
        <b-container fluid="xl" class="text-center" >

            <b-row align-h="center" >
                <b-col data-aos="fade-up"> 
                    <h3>about us</h3> 
                    <p>{{data['about-us']}}</p>
                </b-col>
            </b-row>

            <b-row align-h="center">
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
            </b-row>

        </b-container>
    </div>
    
</template>

<script>

export default {
    props:['data'],

}
</script>

<style scoped>

h3 {
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
}

/* 
.content{
    width: 100%;
    height: 100vh;
}

.container{
    background-color: brown;
}
.row{
    background-color: chocolate;
}
.col{
    background-color: gold;
}
.test{
    background-color: gold;
    width: 50px;
    height: 50px;
} */



</style>