<template>
  <v-app id="app" style="background: #37474F" >
    <div>
      <v-app-bar height="65" light>
        <router-link
          to="/"
          tag="v-btn">
          <img src="./assets/logo.png" height="65">
        </router-link>


        <div class="flex-grow-1"></div>

        <v-col cols="12" sm="6" md="3" >
          <v-text-field
            font-color="black"
            placeholder="Podaj wyszukiwaną frazę"
          ></v-text-field>
        </v-col>

        <v-btn icon>
          <v-icon color="black">mdi-magnify</v-icon>
        </v-btn>

        <router-link
          to="/favourites"
          tag="v-btn">
          <v-btn icon>
            <v-icon color="black">mdi-heart</v-icon>
          </v-btn>
        </router-link>

        <router-link
          to="/community"
          tag="v-btn">
          <v-btn icon>
            <v-icon color="black">mdi-account-group</v-icon>
          </v-btn>
        </router-link>

        <router-link
          to="/journeys"
          tag="v-btn">
          <v-btn icon>
            <v-icon color="black">mdi-airplane-takeoff</v-icon>
          </v-btn>
        </router-link>

        <router-link
          to="/user-account"
          tag="v-btn">
          <v-btn icon>
            <v-icon color="black">mdi-account</v-icon>
          </v-btn>
        </router-link>


        <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>
      </v-app-bar >
      <v-container fluid >
        <v-row jcolor="black"ustify="space-around">
        </v-row>
      </v-container>
    </div>
    <router-view></router-view>
  </v-app>


</template>


<script>

export default {
  name: 'App',
  components: {
  },
};
</script>
