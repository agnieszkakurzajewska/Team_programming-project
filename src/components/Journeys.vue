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


          <v-card  class="podroz" elevation="10" >
            <v-card-text>
              <div class="subheading">Majorka</div>
              <div class="green--text">data rozpoczecia</div>
              <div class="green--text">25.10.2019</div>
              <div class="green--text">data zakończenia</div>
              <div class="green--text">25.10.2019</div>

              <v-btn class="UsunPodroz" >
                Usuń
              </v-btn>

            </v-card-text>

          </v-card>
          <v-card  class="podroz" elevation="10" >
            <v-card-text>
              <div class="subheading">Majorka</div>
              <div class="green--text">data rozpoczecia</div>
              <div class="green--text">25.10.2019</div>
              <div class="green--text">data zakończenia</div>
              <div class="green--text">25.10.2019</div>

              <v-btn class="UsunPodroz" >
                Usuń
              </v-btn>

            </v-card-text>

          </v-card>
          <v-card  class="podroz" elevation="10" >
            <v-card-text>
              <div class="subheading">Majorka</div>
              <div class="green--text">data rozpoczecia</div>
              <div class="green--text">25.10.2019</div>
              <div class="green--text">data zakończenia</div>
              <div class="green--text">25.10.2019</div>

              <v-btn class="UsunPodroz" >
                Usuń
              </v-btn>

            </v-card-text>

          </v-card>

          </v-card>
          <v-card  class="podroz" elevation="10" >
            <v-card-text>
              <div class="subheading">Majorka</div>
              <div class="green--text">data rozpoczecia</div>
              <div class="green--text">25.10.2019</div>
              <div class="green--text">data zakończenia</div>
              <div class="green--text">25.10.2019</div>

              <v-btn class="UsunPodroz" >
                Usuń
              </v-btn>

            </v-card-text>

          </v-card>

          <v-card  class="podroz" elevation="10" >
            <v-card-text>
              <div class="subheading">Majorka</div>
              <div class="green--text">data rozpoczecia</div>
              <div class="green--text">25.10.2019</div>
              <div class="green--text">data zakończenia</div>
              <div class="green--text">25.10.2019</div>

              <v-btn class="UsunPodroz" >
                Usuń
              </v-btn>

            </v-card-text>

          </v-card>
          <v-card  class="podroz" elevation="10" >
            <v-card-text>
              <div class="subheading">Majorka</div>
              <div class="green--text">data rozpoczecia</div>
              <div class="green--text">25.10.2019</div>
              <div class="green--text">data zakończenia</div>
              <div class="green--text">25.10.2019</div>

              <v-btn class="UsunPodroz" >
                Usuń
              </v-btn>

            </v-card-text>

          </v-card>





        </v-layout>



      </v-container>


    </v-content>

  </div>
</template>

<script>
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
</style>

<script>
  export default {
    data () {
      return {


        dialog: false,
      }
    },

  }

</script>
