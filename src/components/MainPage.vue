<!--<AddJourney/>-->

<template >
<body>
  <v-card height="800" >
    <v-carousel
      cycle
      height="800"
      interval = "2000"
      show-arrows = "false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src ="item.src">
        <div class="display-3"></div>

      </v-carousel-item>
    </v-carousel>

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