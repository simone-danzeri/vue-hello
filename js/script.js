// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Il potere di Vue Js',
            img: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Vue-Blog-Cover-2.png'
        };
    },
    methods: {

    }
}).mount('#app');