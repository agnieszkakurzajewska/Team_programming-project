<template >
  <v-app >
    <body>
    <v-app-bar height="65" dark>

      <v-row >


      <router-link
        to="/"
        tag="v-btn">
        <img src="./assets/logo-dark.png" height="65">
      </router-link>


      <div class="flex-grow-1"></div>

      <v-col cols="12" sm="6" md="3" >
        <v-text-field
          v-if="isLoggedIn"
          font-color="black"
          placeholder="Podaj wyszukiwaną frazę"
        ></v-text-field>
      </v-col>

      <v-btn icon v-if="isLoggedIn">
        <v-icon >mdi-magnify</v-icon>
      </v-btn>


        <v-col align="end" >
          <router-link
            v-if="isLoggedIn == false"
            to="/login"
            tag="v-btn">
            Logowanie
          </router-link>
        </v-col>
        <v-col>

          <router-link
            v-if="isLoggedIn == false"
            to="/register"
            tag="v-btn">
            Rejestracja
          </router-link>
        </v-col>
      </v-row>

      <router-link
        v-if="isLoggedIn"
        to="/favourites"
        tag="v-btn">
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </router-link>

      <router-link
        v-if="isLoggedIn"
        to="/community"
        tag="v-btn">
        <v-btn icon>
          <v-icon>mdi-account-group</v-icon>
        </v-btn>
      </router-link>

      <router-link
        v-if="isLoggedIn"
        to="/journeys"
        tag="v-btn">
        <v-btn icon>
          <v-icon>mdi-airplane-takeoff</v-icon>
        </v-btn>
      </router-link>

      <router-link
        v-if="isLoggedIn"
        to="/user-account"
        tag="v-btn">
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>


      <v-app-bar-nav-icon v-if="isLoggedIn"></v-app-bar-nav-icon>

      <v-icon tag="v-btn" v-if="isLoggedIn" v-on:click='logout'>mdi-power</v-icon>

            <ul>
              <li v-for="user in users"
              v-bind:key="user.id">
                {{user.login}}
              </li>
            </ul>

    </v-app-bar >

    <v-container fluid class="ma-0 pa-0">
      <router-view></router-view>
    </v-container>
    </body>




    <v-footer app="true" height="50" color="#424242">
      <v-spacer></v-spacer>
          &copy; {{ new Date().getFullYear() }}
    </v-footer>

  </v-app>
</template>
<script>
  import db from './components/firebaseInit'
  import firebase from 'firebase'
  export default{
    data () {
      return {
        isLoggedIn:  false,
        currentUser:  false,
        users: []
      }
    },
    methods: {
      logout: function() {
        /* eslint-disable no-console */
        console.log(firebase.auth().currentUser);
        /* eslint-enable no-console */
        firebase.auth().signOut().then(() => {
          this.$router.go({path: this.$router.path});

        })
      }/*,
      // test update to db
      pass: function () {
        let data = {
          email: 'a@gmail.com',
          last_name: "Kowalski",
          name: "Adam",
          password: "123"
        }
        db.collection('Users').doc('aaa').set(data);
      }
      */
    },
    created () {
      // test
      //this.pass();
      db.collection('users').get().then(querySnaphot => {
        querySnaphot.forEach(doc => {
          const data = {
            "id": doc.id,
            'login': doc.data().login,
            'password': doc.data().passsword,
          }
          this.users.push(data)
        })
      });
      if ( firebase.auth().currentUser) {
        this.isLoggedIn  =true;
        this.currentUser = firebase.auth().currentUser.email;
      }
    }
  }
</script>


