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


              <v-btn class="znajdz" v-on="on" color="primary">
                Znajdź podróż
              </v-btn>

          </v-flex>

          <div v-for="jour in journeys"  v-bind:key="jour.id">
            <v-card  class="podroz" elevation="10" >
              <v-card-text>
                <div class="subheading">{{jour.data().destination}}</div>
                <div class="green--text">data rozpoczecia</div>
                <div class="green--text">{{mydate(jour.data().start_date.toDate())}}</div>
                <div class="green--text">data zakończenia</div>
                <div class="green--text">{{mydate(jour.data().end_date.toDate())}}</div>

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
  import {getTravels,deleteFromJourney} from './DBFunctions';
  export default {
    data(){
      return{
        dialog: false,
        journeys: []
      }
    },
    created() {
      var self=this;
      getTravels(firebase.auth().currentUser.uid).then(function (output) {
        output.forEach(jour=>{self.journeys.push(jour)})
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
</style>
