<template>
  <div>
    <!--
    <h1>Zakładka ulubione</h1>
    <input v-model="search" placeholder="Search users">
    <input v-model="message" placeholder="name">
    <button v-on:click="travelsget()">Change name</button>
    <p id="myp">Message</p>
    <div v-for="user in filterusers"  v-bind:key="user.email" class="searchresults">
      <h2>{{user.name}}</h2>
      <h2>{{user.last_name}}</h2>
    </div>
    -->
    <h1>Szukaj użytkowników</h1>
    <input type="text" v-model="search" list="users" style="border-style: solid; border-width: 1px;">
    <datalist id="users">
      <option v-for="user in users" v-bind:key="user.email" >{{user.name + " " + user.last_name}}</option>
    </datalist>
    <button style="border-style: solid; border-width: 2px;">Follow</button>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import {getUserName, setUserName,getTravels,allusers} from './DBFunctions'

  export default {
    data(){
      return {
        users: [],
        search: ''
      }
    },
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
    },
    created() {
      var self = this;
      allusers().then(function (output) {
        // eslint-disable-next-line no-console
        output.forEach(us => {self.users.push(us)})
      })
    }/*,
    computed: {
      filterusers: function() {
        return this.users.filter((user) =>{
          // eslint-disable-next-line no-console
          console.log(this.users);
          return user.name.toLowerCase().match(this.search.toLowerCase());
        });
      }
    }
    */
  }
</script>