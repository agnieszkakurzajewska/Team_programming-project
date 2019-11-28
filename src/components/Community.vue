<!--<AddJourney/>-->

<template >
  <body>
  <v-card height="800" >
    <v-navigation-drawer
      :mini-variant.sync="mini"
      right
      dark
      absolute
      mini-variant-width="170px"
    >
      <v-list-item>
        <v-list-item-title>Społeczności</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </v-card>

  </body>
</template>

<script>
  // import AddJourney from './AddJourney'
  export default {
    components: {
      // AddJourney,
    },
    data () {
      return {
        drawer: true,
        items: [
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tour_eiffel_paris-eiffel_tower.jpg/1599px-Tour_eiffel_paris-eiffel_tower.jpg',
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/800px-Colosseum_in_Rome-April_2007-1-_copie_2B.jpg',
          },
          {
            src: 'https://printground.net/wp-content/uploads/2017/04/statue.jpg',
          },
          {
            src: 'https://www.goodfreephotos.com/cache/england/london/cityscape-and-capital-in-london-england.jpg',
          },
        ],
        mini: true,
      }
    },
  }
</script>
