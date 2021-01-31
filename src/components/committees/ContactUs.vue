<template>
    <div class="contact-us-section">
        <b-container fluid="xl" class="text-center">

            <b-row class="my-2" align-h="center">
                <b-col data-aos="zoom-in-up"> 
                    <h3>contact us</h3> 
                </b-col>
            </b-row>

            <b-row class="my-5">
                <b-col data-aos="zoom-in-right" class="right-border contact">
                    <b-icon icon="geo-alt-fill" font-scale="3" class="icon mb-3"></b-icon>
                    <h5>address</h5>
                    <p>{{contact.address}}</p>
                </b-col>
                <b-col data-aos="zoom-in-left" class="contact">
                    <b-icon icon="envelope-fill" font-scale="3" class="icon mb-3"></b-icon>
                    <h5>email</h5>
                    <p>{{contact.email}}</p>
                </b-col>
                <div></div>
            </b-row>

            <b-form @submit="onSubmit">
                <b-row>
                    <b-col class="mb-2" data-aos="zoom-in-right" sm="6">
                        <b-form-input v-model="form.name" type="text" id="name" placeholder="Your Name" required></b-form-input>
                    </b-col>
                    <b-col class="mb-2" data-aos="zoom-in-left" sm="6">
                        <b-form-input v-model="form.email" type="email" id="email" placeholder="Your Email" required></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="mb-2" data-aos="zoom-in-up">
                        <b-form-input v-model="form.subject" type="text" id="subject" placeholder="Subject" required></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="mb-2" data-aos="zoom-in-up">
                        <b-form-textarea rows="3" max-rows="12" v-model="form.message" type="text" id="message" placeholder="Message" required></b-form-textarea>
                    </b-col>
                </b-row>

                <b-button data-aos="zoom-in" data-aos-duration="3000" class="mb-2" type="submit" variant="primary">Submit</b-button>

            </b-form>       
        </b-container>
    </div>
</template>


<script>
export default {
    props:['contact'],

    data(){
        return{
            form: {
                name:'',
                email:'',
                subject:'',
                message:''
            },
        }
    },
    
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }

    

}
</script>

<style scoped>

.contact-us-section{
    background-color: rgb(240, 239, 239);
}

.right-border{
    border-right: solid #dee2e6 2px;
}

.contact:hover > .icon{
    color: rgb(25, 0, 248);
    transform: scale(1.5);
    transition: color 2s, transform .5s;
}



</style>