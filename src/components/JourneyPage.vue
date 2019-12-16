<template>
    <div>{{jname}}</div>
</template>

<script>
    //import firebase from 'firebase';
    //import db from './firebaseInit';
    import {getTravel} from './DBFunctions';
    require('firebase/auth');

    export default {
        name: "JourneyPage",
        data(){
            return{
                jname: "",
                myjourney: location.href.split("?")[1]
            }
        },
        mounted(){
            this.onLoad();
        },
        methods: {
            onLoad(){
                var self = this
                getTravel(this.myjourney).then(function (output) {
                    self.jname = output.destination})
            }
        }
    }
</script>

<style scoped>

</style>