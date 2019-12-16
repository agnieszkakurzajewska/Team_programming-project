<!--
To Do: Zaproszenia do podróży, uprawnienia założyciela, uładnienia, edycje, więcej funkcjonalności
-->
<template>
    <main>
        <section id="members">
            <v-card  class="useritem" elevation="10" >
                <v-card-text>

                    <div class="myarea">
                        <div class="mytext2">Uczestnicy podróży: </div>
                    </div>

                </v-card-text>

            </v-card>
            <div v-for="user in jusers"  v-bind:key="user">
                <v-card  class="useritem" elevation="10" >
                    <v-card-text>

                        <div class="myarea">
                            <div class="mytext">{{user.name == "" ? "Brak imienia" : user.name}} {{user.lastname == "" ? "Brak nazwiska" : user.lastname}} </div>
                            <div class="mybuttons">
                                <v-btn class="chatbutton" @click="chat(user.id)" >
                                    Chat
                                </v-btn>
                                <v-btn class="profilebutton" @click="profile(user.id)" >
                                    Profil
                                </v-btn>
                            </div>
                        </div>

                    </v-card-text>

                </v-card>
            </div>
            <v-card  class="useritem" elevation="10" >
                <v-card-text>

                    <div class="myarea">
                        <div class="mytext2">Wyślij zaproszenie </div>
                        <v-btn class="profilebutton" @click="invite(myjourney)" >
                            Zaproś
                        </v-btn>
                    </div>

                </v-card-text>

            </v-card>
        </section>
        <section id="others">
            <div class="tab">
                <div class="title">{{jname}}</div>
                <div class="date">
                    <div class="datetext">Data rozpoczęcia: {{jbeg}}</div>
                    <div class="datebutton">
                        <v-btn class="profilebutton" @click="editb()" >
                            Edytuj
                        </v-btn>
                    </div>
                </div>
                <div class="date">
                    <div class="datetext">Data zakończenia: {{jend}}</div>
                    <div class="datebutton">
                        <v-btn class="profilebutton" @click="editb()" >
                            Edytuj
                        </v-btn>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import firebase from 'firebase';
    //import db from './firebaseInit';
    import {getTravel,getUser} from './DBFunctions';
    require('firebase/auth');

    export default {
        name: "JourneyPage",
        data(){
            return{
                jname: "",
                jbeg: null,
                jend: null,
                jusers: [],
                jdesc: "",
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
                    self.jname = output.destination;
                    self.jbeg = output.start_date.toDate().toISOString().substr(0,10);
                    self.jend = output.end_date.toDate().toISOString().substr(0,10);
                    output.travelers.forEach(us => {
                        getUser(us).then( function (output2) {
                            if (us !== firebase.auth().currentUser.uid) {
                                let data = {
                                    id: us,
                                    name: output2.name,
                                    lastname: output2.last_name
                                };
                                self.jusers.push(data);
                            }
                        });
                    });
                    // eslint-disable-next-line no-console
                    console.log(typeof output.start_date)
                })
            },
            chat(id){
                window.location.href="/#/chats?"+id;
            },
            profile(id){
                window.location.href="/#/profile-page?"+id;
            }
        }
    }
</script>

<style scoped>
    main{
        display: flex;
        width: 100%;
        /*background-color: #222;*/
    }
    #members{
        height: 100%;
        width: 30%;
        /*border: solid 2px #222;*/
    }
    #others{
        height: 100%;
        width: 70%;
        /*border: solid 2px #222;
        background-color: #353535;*/
    }
    .useritem{
        width:  90%;
        /*height: 50px;*/

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 5px;
    }
    .myarea{
        text-align: center;
        margin: 5px;
        display: flex;
    }
    .mytext{
        width: 50%;
        display: flex;
        font-size: 20px;
        font-family: Arial;
    }
    .mytext2{
        width: 95%;
        display: flex;
        font-size: 25px;
        font-family: Arial;
        font-weight: bold;
        color: #222222;
    }
    .mybuttons{
        width: 50%;
        display: flex;
    }
    .chatbutton{
        float: right;
        width: 45%;
        margin: 2px;
    }
    .profilebutton{
        float: right;
        width: 45%;
        margin: 2px;
    }
    .title{
        text-align: center;
        margin: 10px;
        display: flex;
        font-size: 58px;
        font-family: Arial;
        font-weight: bold;
        color: #100055;
    }

</style>