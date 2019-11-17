<template>
  <v-app id="app">
    <div>
      <v-app-bar height="65" dark>

        <v-toolbar-title>Flocker</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            placeholder="Podaj wyszukiwaną frazę"
          ></v-text-field>
        </v-col>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>



        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>


        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar>
      <v-container fluid>
        <v-row justify="space-around">
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
