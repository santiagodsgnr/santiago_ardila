const app = new Vue ({
    el: '#app',
    data() {
        return {
            menu: false
        }
    },
    methods: {
        toggleMenu() {
            this.menu = !this.men
        }
    }
})