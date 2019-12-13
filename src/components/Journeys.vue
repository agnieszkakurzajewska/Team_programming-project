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


              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn class="znajdz" color="primary" dark v-on="on">Nowa podróż +</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Nowa podróż</span>
                  </v-card-title>
                  <v-card-text>


                        <v-col cols="12" >
                          <v-text-field label="Cel podróży" ></v-text-field>
                        </v-col>


                        <v-col cols="12">
                          <v-text-field label="Data rozpoczęcia" ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Data zakończenia" type="password" ></v-text-field>
                        </v-col>




                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Zamknij</v-btn>
                    <v-btn @click="dialog = false" color="blue darken-1" text>Zapisz</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>


              <v-btn class="WyszukajPodróż" v-on="on" color="primary">
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

                <v-btn class="WejdzWPodroz" >
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
