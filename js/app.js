new Vue({
    el: "#app",
    data: {
        changeImgTuto:"",
        changeImgChat:"",
        changeImgToDoList:"",
        changeImgLandingPage:"",

    },
    methods: {
        closeMenu(){
            
            document.getElementById("checkboxMenu").click(); // Click on the checkbox
        },


        toogleImgTuto(){
            this.changeImgTuto = !this.changeImgTuto
        },

        toogleImgChat(){
            this.changeImgChat = !this.changeImgChat
        },
        toogleImgToDoList(){
            this.changeImgToDoList = !this.changeImgToDoList
        },
        toogleImgLandingPage(){
            this.changeImgLandingPage = !this.changeImgLandingPage
        },

    },
})