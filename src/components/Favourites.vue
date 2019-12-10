<template>
  <div>
    <h1>Zakładka ulubione</h1>
    <input v-model="message" placeholder="name">
    <button v-on:click="travelsget()">Change name</button>
    <p id="myp">Message</p>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import {getUserName, setUserName,getTravels} from './DBFunctions'

  export default {
    methods: {
      namechange: function(s) {
        setUserName(firebase.auth().currentUser.uid,s);
      },
      nameget: function () {
        getUserName(firebase.auth().currentUser.uid).then(function (output) {
          document.getElementById("myp").innerText = output;
        })
      },
      travelsget: function () {
        getTravels(firebase.auth().currentUser.uid).then(function (output) {
          // eslint-disable-next-line no-console
          console.log(output);
          document.getElementById("myp").innerText = output;
        })
      }
    }

  }
</script>