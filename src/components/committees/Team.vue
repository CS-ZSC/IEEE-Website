<template>
    <div class="team-section">
        <b-container fluid="xl" class="text-center" >

            <b-row class="my-2" align-h="center">
                <b-col data-aos="fade-up"> 
                    <h3>Our Team</h3> 
                </b-col>
            </b-row>

            <!-- Chairman -->
            <b-row align-h="center"  >
                <b-col data-aos="fade-up"  class="c" cols="12">
                    <div  class="mb-2">
                        <b-avatar v-bind:src="data[0].img" size="7rem"></b-avatar>
                        <div class="avatar-info">
                            <h4>{{data[0].name}}</h4>
                            <p>{{data[0].position}}</p>
                        </div>
                    </div>
                </b-col>
            </b-row>

            <!-- ALL TEAM -->
            <b-row align-h="center"  >
                <b-col class="c" v-for="(member, index) in data.slice(1)" :key="index" data-aos="fade-up">
                    <div class="mb-2">
                        <b-avatar v-bind:src="member.img" size="7rem"></b-avatar>
                        <div class="avatar-info">
                            <h4>{{member.name}}</h4>
                            <p>{{member.position}}</p>
                        </div>
                    </div>
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



</style>