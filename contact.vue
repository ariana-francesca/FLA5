<template>
    <div class="contact">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below to get in touch.</p>

        <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="formData.name" required />
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required />
            </div>

            <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" id="subject" v-model="formData.subject" required />
            </div>

            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="formData.message" required></textarea>
            </div>

            <button type="submit">Send Message</button>
        </form>

        <h2>Follow Us</h2>
        <p>Stay connected through our social media channels:</p>
        <ul class="social-media">
            <li><a href="https://www.facebook.com/BINI" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/BINI" target="_blank">Instagram</a></li>
            <li><a href="https://www.twitter.com/BINI" target="_blank">Twitter</a></li>
            <li><a href="mailto:info@bini.com">Email Us</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
        };
    },
    methods: {
        submitForm() {
            console.log("Form submitted:", this.formData);
            this.formData = {
                name: '',
                email: '',
                subject: '',
                message: '',
            };
            alert('Thank you for your message! We will get back to you soon.');
        },
    },
}
</script>

<style scoped>
.contact {
    text-align: center;
    padding: 20px;
}

.contact-form {
    display: inline-block;
    margin: 20px auto;
    max-width: 400px;
    text-align: left;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input, textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.social-media {
    list-style-type: none;
    padding: 0;
}

.social-media li {
    margin: 5px 0;
}
</style>
