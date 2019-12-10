<!--<AddJourney/>-->

<template >
  <body>


  <v-card height="800" >
    <v-app-bar height="45">
      <v-spacer></v-spacer>
      <h3 style="color:#1975d2">SPOŁECZNOŚCI</h3>
      <v-spacer></v-spacer>
    </v-app-bar >
<v-container fluid >
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>Single-line item</v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>Two-line item</v-list-item-title>
      <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>

  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title>Three-line item</v-list-item-title>
      <v-list-item-subtitle>
        Secondary line text Lorem ipsum dolor sit amet,
      </v-list-item-subtitle>
      <v-list-item-subtitle>
        consectetur adipiscing elit.
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</v-container>
  </v-card>

  <v-btn
    absolute
    x-large
    dark
    rounded
    color="primary"
    elevation="24"
    :style="{left: '90%', transform:'translateX(-50%)', top: '85%'}"
    to="/add-journey"
  >
    Stwórz grupę
  </v-btn>

  </body>
</template>

<script>
  export default {
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
