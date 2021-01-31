<template>
    <div>
        <div class="padding ">
            <a name="partners"></a>
        <b-container >
        <h2 class="center margin" data-aos="fade-down">Our Partners</h2>
        <div class="center">
            <b-row class="flex">
                <b-card v-for="partner in partners" :key="partner.index"
                        data-aos="fade-down-right"
                        overlay
                        :img-src="partner" 
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-1 card"
                        
                    >
                    <b-card-text>
                       
                    </b-card-text>
                        </b-card>
            </b-row>
        </div>
        </b-container>
        </div>
    </div>
</template>
<script>
export default {
    name:"partners",
    props:["partners"]
}
</script>
<style scoped>
.border{border: 2px red;}
.flex{justify-content: center; flex-direction: row;}
.card:hover{transform: scale(0.9);}
</style>