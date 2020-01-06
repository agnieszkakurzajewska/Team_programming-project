<!DOCTYPE html>
<html lang="pl"></html>

<head>

</head>

<template>
  <div id="app">
    <v-content>
      <v-container class="my-5">
        <v-layout row wrap>
          <v-flex class="navbar" color="background" >

            <v-btn class="WyszukajPodróż" v-on="on" color="primary" to="/add-journey">
              Nowa podróż
            </v-btn>

              <v-dialog v-model="dialog" scrollable max-width="350px">
                  <template v-slot:activator="{ on }">
                      <v-btn class="znajdz" dark v-on="on" color="primary">
                          Znajdź podróż
                      </v-btn>
                  </template>
                  <v-card>
                      <v-card-title>Aktywne Podróże: </v-card-title>
                      <input type="text" v-model="search" placeholder="Szukaj podróży">
                      <v-divider></v-divider>
                      <v-card-text style="height: 300px;">
                      <div v-for="jour in filteredjourneys" v-bind:key="jour">
                          <v-card  class="useritem" elevation="10" >
                              <v-card-text>
                                  <div class="mytext">{{jour.destination}} <br />
                                      {{jour.users}} {{jour.users == 1 ? "uczestnik" : "uczestników"}}</div>
                                  <v-btn class="mybutton" @click="wezudzial(jour.id)" color="primary">
                                      Weź udział
                                  </v-btn>

                              </v-card-text>
                          </v-card>
                      </div>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                      </v-card-actions>
                  </v-card>
              </v-dialog>

          </v-flex>

          <div v-for="jour in journeys"  v-bind:key="jour.id">
            <v-card  class="podroz" elevation="10" >
              <v-card-text>
                <div class="subheading">{{jour.destination}}</div>
                <div class="green--text">data rozpoczecia</div>
                <div class="green--text">{{mydate(jour.start_date.toDate())}}</div>
                <div class="green--text">data zakończenia</div>
                <div class="green--text">{{mydate(jour.end_date.toDate())}}</div>

                <v-btn class="WejdzWPodroz" v-bind:href="'/#/journey?'+jour.id" >
                  Więcej
                </v-btn>
                <v-btn class="UsunPodroz" @click="usunmnie(jour.id)" >
                  Opuść
                </v-btn>

              </v-card-text>

            </v-card>
          </div>

        </v-layout>



      </v-container>


    </v-content>

  </div>
</template>

<script>
  import firebase from 'firebase'
  import {getTravels,deleteFromJourney,allTravels,addpending} from './DBFunctions';
  export default {
    data(){
      return{
        dialog: false,
        journeys: [],
        alljourneys: [], // tu muszą być te w których nie bierzemy udziału i nie jesteśmy pending
        search: ''
      }
    },
    created() {
      var self=this;
      getTravels(firebase.auth().currentUser.uid).then(function (output) {
        output.forEach(jour=>{
            let data = {
                destination: jour.data().destination,
                start_date: jour.data().start_date,
                end_date: jour.data().end_date,
                id: jour.id,
                travelers: jour.data().travelers,
                pending: jour.data().pending
            };
            self.journeys.push(data);
        })

      });
      // wszystkie podróże w których nie jesteśmy (ich destination i liczba uczestników)
      allTravels().then(function (output) {
          output.forEach(jour=> {
              if (!(jour.data().travelers.includes(firebase.auth().currentUser.uid)) && !(jour.data().pending.includes(firebase.auth().currentUser.uid))) {
              let data = {
                  destination: jour.data().destination,
                  users: jour.data().travelers.length,
                  id: jour.id
              };
              self.alljourneys.push(data)
              }
          })
      })
    },
    methods: {
      mydate(d) {
        let day = d.getDate();
        let month = d.getMonth()+1;
        let year = d.getFullYear();
        let newdate = day + "/" + month + "/" + year;
        return newdate;
      },
      reloadPage(){
        window.location.reload()
      },
      usunmnie(jourid) {
        var self=this;
          // eslint-disable-next-line no-console
        console.log('jourid1: ', jourid);
        deleteFromJourney(firebase.auth().currentUser.uid,jourid).then(function() {
          self.reloadPage();
        })
        //this.reloadPage();
      },
      wezudzial(jourid) {
          var self = this;
          addpending(firebase.auth().currentUser.uid,jourid);
          self.dialog = false;
          alert("Wysłano prośbę o wzięcie udziału!");
      }
    },
    computed: {
        filteredjourneys: function () {
            return this.alljourneys.filter((jour)=>{
                return jour.destination.toLowerCase().match(this.search.toLowerCase());
            })
        }
    }  
  }
</script>

<style lang="scss">
  .subheading{
    text-align: center;
    font-size: xx-large;
  }
  .dodajPodróż{
    float: right;
  }
  .podroz{

    margin-top: 40px;
    width:  30.1%;
    min-width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 19px;
  }
  .subheading{
    text-align: center;
    justify-content: center;
    display: flex;
    margin-bottom: 20px;
    font-family: "Roboto";
  }
  .navbar{

    width: 100%;
    margin-bottom: 15px;
  }
.znajdz{
  float: right;

}
.green--text{
  font-size: 20px;
  text-align: center;
  margin: 10px;
  font-family: Arial;
}

  .UsunPodroz{
    float: right;
    margin-right: 10px;

  }
  .WejdzWPodroz{
    float: left;
    margin-left: 10px;
  }
  .mytext{
      width: 50%;
      float: left;
      font-size: 20px;
      font-family: Arial;
  }
  .useritem{
      width:  100%;
      /*height: 50px;*/

      display: flex;
      justify-content: center;
      align-items: center;

      margin: 5px;
  }
  .mybutton{
      width: 50%;
      float: right;
  }
</style>
