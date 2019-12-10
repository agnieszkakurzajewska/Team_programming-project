<template >
  <body>
    <v-dialog v-model="dialog" width="1000">
      <v-card>
        <v-row  style="margin-right: 30px; margin-left: 30px" :cols="12">
          <v-col :cols="3">
            <v-toolbar color="#1975d2" dark>
              <v-toolbar-title>Członkowie</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-list three-line>
              <template v-for="(item, index) in descriptions">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-item
                  v-else
                  :key="item.title"
                  @click=""
                >
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-col>

          <v-col :cols="9">
            <v-row>

              <v-col>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1"><h3 style="color:#1975d2">{{actualTitle}}</h3></v-list-item-title>

                    <v-list-item-subtitle><br/><br/>{{actualDescription}}</v-list-item-subtitle>
                  </v-list-item-content>

                </v-list-item>
              </v-col >
              <v-col align="end" >
                <v-avatar size="220">
                  <v-img     aspect-ratio="1"
                             class="grey lighten-2"
                             max-width="300"
                             max-height="300"

                             :src="actualAvatar"></v-img>
                </v-avatar>

              </v-col>
            </v-row>
          </v-col>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-row>
      </v-card>
    </v-dialog>






    <v-card class="mx-auto">
      <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-title style="color:#1975d2"><h2>Moje społeczności</h2></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="changeDialog(item.title, item.description, item.avatar)"
        >
          <v-list-item-content>

            <v-container fluid>
              <h2 style="color:#1975d2">{{item.title}}</h2>

              <v-textarea
                readonly
                auto-grow
                solo
rounded
                :value ="item.description"
              ></v-textarea>
            </v-container>
          </v-list-item-content>

          <v-list-item-avatar size="140">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-card>

  <v-btn
     fixed
    x-large
    dark
    rounded
    color="primary"
    elevation="24"
    :style="{left: '50%', transform:'translateX(-50%)', top: '90.5%'}"
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
        actualTitle: "dupa",
        actualDescription: "zdjecie dupy",
        actualAvatar: "https://www.wprost.pl/_thumb/2x/xe/bbf62c6c20b44762e94679a5528e.jpeg",
        dialog: false,
        descriptions: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Karol',
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Maciek',
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Sylwia',
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Jola',
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Ania',
          },
        ],
        items: [
          { icon: true, title: 'Marynarze', avatar: 'https://image.freepik.com/darmowe-wektory/grupa-mlodych-ludzi-pozuje-do-zdjecia_52683-18823.jpg', description: "aaa" },
          { title: 'Seniorzy w górach', avatar: 'https://image.freepik.com/darmowe-zdjecie/aktywna-para-starszych-wedrowek-z-kijkami-do-nordic-walking_79405-11924.jpg', description: "aafsdfsdfsdfa" },
          { title: 'Grecjaaa', avatar: 'https://image.freepik.com/darmowe-wektory/antique-roman-swiatynia-stylizowane-tlo-wektor_1110-815.jpg', description: "aghtrbhrtyhntyhnaa" },
          { title: 'Jedziemy w Andy', avatar: 'https://image.freepik.com/darmowe-zdjecie/snowy-zimowe-gory_127657-14630.jpg', description: "aaertrwqqrtwrwea" },
          { title: 'Wspinaczka górska - gdzie???', avatar: 'https://image.freepik.com/darmowe-zdjecie/turysci-wchodza-na-wzgorze-o-wschodzie-slonca_1150-19692.jpg', description: "a34256758675432 aa" },
        ],
        mini: true,
      }
    },
    methods: {
      changeDialog: function(title, description, avatar) {
        this.actualDescription = description;
        this.actualTitle = title;
        this.actualAvatar = avatar;

        this.dialog = !(this.dialog)
      }
    }
  }
</script>
