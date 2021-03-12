
const app = new Vue({
    el: '#app',
    data() {
        return {
            menu: false,
            modal: false,
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        toggleMenu() {
            this.menu = !this.menu
        },
        sendEmail(e) {
            this.toggleModal()
            try {
                emailjs.sendForm('service_csktkor', 'template_7lqbgou', e.target,
                    'user_eWlhpW6FCgbFI2PzT3HOr', {
                        name: this.name,
                        email: this.email,
                        message: this.message
                    })
                console.log('Correo enviado')
            } catch (error) {
                console.log({
                    error
                })
            }
            this.name = '',
            this.email = '',
            this.message = ''
        },
        toggleModal() {
            this.modal = true
            setTimeout(() => {
                this.modal = false
            }, 3000);
        }
    }
})