<template>
  <div>
    <h1>Zakładka ulubione</h1>
    <input v-model="message" placeholder="name">
    <button v-on:click="namechange(message)">Change name</button>
    <p>Message is: {{  }}</p>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import {setUserName} from './DBFunctions'
  export default {
    methods: {
      namechange: function(s) {
        return setUserName(firebase.auth().currentUser.uid,s);
      }
    }

  }
</script>