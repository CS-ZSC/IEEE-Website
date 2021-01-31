<template>
  <div id="ContactUs" class="contact-us-container">
    <div class="jumbotron jumbotron-sm">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-12">
                    <h1 class="h1">Contact us</h1>
                    <p class="subtitle">let's get in touch ysta</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="well well-sm">
                    <form @submit.prevent="sendEmail">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name">
                                    Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    class="form-control" 
                                    id="name"
                                    v-model="name"
                                    placeholder="Enter name" 
                                    required="required" />
                            </div>
                            <div class="form-group">
                                <label for="email">
                                    Email Address</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                    </span>
                                    <input 
                                        type="email"
                                        name="email" 
                                        class="form-control" 
                                        id="email"
                                        v-model="email" 
                                        placeholder="Enter email" 
                                        required="required" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="subject">
                                    Subject</label>
                                    <input 
                                        id="subject" 
                                        name="subject"
                                        v-model="subject" 
                                        class="form-control" 
                                        placeholder="Supject" 
                                        required="required" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name"> Message</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        v-model="message"
                                        class="form-control" 
                                        rows="9" cols="25" 
                                        required="required"
                                        placeholder="Message">
                                    </textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                                <input type="submit" class="btn btn-primary pull-right" id="btnContactUs" value="Send Message">
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <div class="col-md-4">
                <form>
                    <legend><span class="glyphicon glyphicon-globe"></span>IEEE Student Branch, Zagazig university</legend>
                    <address>
                        <strong>Location</strong><br>
                        <a href="https://goo.gl/maps/ztgyMiXcgAVtCwRY7">Rd inside Zagazig University, Shaibet an Nakareyah, Zagazig, Ash Sharqia Governorate 44519</a>
                    </address>
                    <address>
                        <strong>Email</strong><br>
                        <a href="mailto:info@ieee-zsb.org">info@ieee-zsb.org</a><br>
                    </address>
                    <follow-us />
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: "ContactUs",
    data() {
        return {
        name: '',
        email: '',
        subject: '',
        message: ''
        }
    },
    methods: {
        sendEmail(e) {
        try {
            emailjs.sendForm('service_djkk0eo', 'template_jefjx4b', e.target,
            'user_LolrCiBKtQin705vxo8S6', {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
            })

        } catch(error) {
            console.log({error})
            }            
            this.name = ''
            this.email = ''
            this.subject = ''
            this.message = ''
        },
    },

}
</script>
<style scoped>

.contact-title{
    text-align: center;
    color:#FFF;
    padding-top: 100px;
    font-size: 100px;
} 
.container{
    padding-top: 40px;
}
.jumbotron {
    text-align: center;
    background-color: rgb(106, 68, 143);
    /* background-image: radial-gradient(to bottom right, rgb( rgb(65, 54, 51)), rgb(236,98,56)); */
    background-size: cover;
    height: 300px;
    color: #FFF;
    border-radius: 0px;
}
.jumbotron-sm {
    padding-top: 24px;
    padding-bottom: 24px; 
}
.jumbotron small {
color: #FFF;
}
.h1{
    font-size: 100px;
}
.subtitle{
font-size: 24px;
}
@media (max-width: 768px){
    .h1{
        font-size: 80px;
    }
}
</style>

