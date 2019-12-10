<!--<AddJourney/>-->

<template >
<body>

  <v-card height="800" >
    <v-carousel
      show-arrows-on-hover = "true"
      cycle
      height="800"
      interval = "5000"
      show-arrows = "false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src ="item.src"
      alt = "aaa">
        <div class="display-3"></div>
        <v-btn
          absolute
          x-large
          dark
          rounded
          color="primary"
          elevation="24"
          :style="{left: '50%', transform:'translateX(-50%)', top: '40%'}"
          to="/add-journey"
        >
          Zaplanuj podróż
        </v-btn>
      </v-carousel-item>
    </v-carousel>

  </v-card>

</body>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        drawer: true,
        items: [
          {
            src: 'https://i.ibb.co/XJkBDG6/339176-PA5-M6-S-588.jpg',
          },
          {
            src: 'https://i.ibb.co/1MYkGM3/ODRAOS0.jpg',
          },
          {
            src: 'https://i.ibb.co/K684d7V/12856.jpg',
          },
          {
            src: 'https://i.ibb.co/xJBym0C/OS5DEC0.jpg',
          },
          {
            src: 'https://i.ibb.co/tLZ8d4h/OEM9DY0.jpg',
          },
        ],
        mini: true,
      }
    },
  }
</script>