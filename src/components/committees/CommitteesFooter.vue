<template>
    <div class="committees-footer">
        <b-container fluid="xl" class="py-3">
            <b-row >
                <b-col sm="auto" md="6"> 
                    <h1 class="left">IEEE {{data['name']}}</h1>
                    <p>{{data['about']['about-us']}}</p>
                </b-col>
                <b-col sm="auto"> 
                    <h4>Contact Us</h4>
                    <p>
                        {{data['contact-us'].address}}
                        <br>
                        <strong>Email:</strong>
                        {{data['contact-us'].email}}
                    </p>
                    <a v-bind:href="data['contact-us'].facebook" target="_blank"><b-icon icon="facebook" font-scale="2" class="icon mb-3 m-1"></b-icon></a>
                    <a v-bind:href="data['contact-us'].facebook" target="_blank"><b-icon icon="twitter" font-scale="2" class="icon mb-3 m-1"></b-icon></a>
                    <a v-bind:href="data['contact-us'].facebook" target="_blank"><b-icon icon="linkedin" font-scale="2" class="icon mb-3 m-1"></b-icon></a>
                    <a v-bind:href="data['contact-us'].facebook" target="_blank"><b-icon icon="github" font-scale="2" class="icon mb-3 m-1"></b-icon></a>

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
.committees-footer{
    background-color: rgb(0, 0, 0);
    color: white;
}
.left{
    border-left: 4px solid #3814db;
    font-weight: 700;
    line-height: 1;
    padding: 2px 0 2px 10px;

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
