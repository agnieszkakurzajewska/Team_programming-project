<template>

  <v-form v-model="valid" >

    <v-col align="center">

      <h1 text-align="center"><br><br>Utwórz nową podróż</h1>

      <v-col cols="12" sm="6" md="4">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
        </p>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <v-text-field
                label="Cel podróży"
                v-model="destination"
                placeholder=" "
                required
        ></v-text-field>

        <v-btn v-on:click="atRandom" color="primary">
          Zdaj się na los!
        </v-btn>

      <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
                  v-model="date"
                  label="Data rozpoczęcia"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Anuluj</v-btn>
          <v-btn text color="primary" @click="menu1click(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

        <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="date2"
                transition="scale-transition"
                offset-y
                min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
                    v-model="date2"
                    label="Data zakończenia"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date2" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu2 = false">Anuluj</v-btn>
            <v-btn text color="primary" @click="menu2click(date2)">OK</v-btn>
          </v-date-picker>
        </v-menu>

        <v-btn v-on:click="utworzPodroz" color="primary">
          Utwórz Podróż
        </v-btn>
      </v-col>
    </v-col>
  </v-form>
</template>


<script>
  import firebase from 'firebase'
  import {addJourney,getRecommendations} from './DBFunctions'

  export default {
    data: () => ({
      date: new Date().toISOString().substr(0,10),
      date2: new Date().toISOString().substr(0,10),
      destination: '',
      valid: false,
      dataroz: null,
      datazak: null,
      menu: false,
      menu2: false,
      errors: [],
      recommended: []
    }),
    created() {
      var self = this;
      getRecommendations().then(function (output) {
        // eslint-disable-next-line no-console
        output.forEach(us => {self.recommended.push(us)})
      })
    },
    methods: {
      menu1click: function(date){
        this.$refs.menu.save(date);
        // eslint-disable-next-line no-console
        console.log('menu1: ', date);
      },
      menu2click: function(date){
        this.$refs.menu2.save(date);// eslint-disable-next-line no-console
        console.log('menu2: ', this.parseISOString(date));

      },
      utworzPodroz: function() {
        this.errors = [];
        if (this.parseISOString(this.date) > this.parseISOString(this.date2))
          this.errors.push('Data rozpoczęcia musi nastąpić wcześniej niż zakończenia');
        if (this.destination == null || this.destination=="")
          this.errors.push('Podaj cel podróży');
        if (this.errors.length == 0)
        {
          // eslint-disable-next-line no-console
          console.log('sukces!');
          if (firebase.auth().currentUser)
            addJourney(this.destination,this.parseISOString(this.date2),firebase.auth().currentUser.uid,this.parseISOString(this.date));
          this.$router.push('/journeys');
        }
      },
      parseISOString(s) {
        let myDate=s.split("-");
        let newDate=myDate[0]+"/"+myDate[1]+"/"+myDate[2];
        return (new Date(newDate));
      },
      atRandom(){
        let mydest = this.recommended[Math.floor(Math.random() * this.recommended.length)];
        this.destination=mydest;
      }
    }
  }
</script>