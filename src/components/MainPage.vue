<template>
  <v-app>
   <div>
    <v-app-bar height="65" dark>

     <v-toolbar-title>Nazwa strony</v-toolbar-title>

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

     <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-container fluid>
     <v-row justify="space-around">

      <v-col cols="5">
       <div class="subheading"></div>
       <v-img src="https://gfx.radiozet.pl/var/radiozet/storage/images/muzyka/benjamin-keough-tak-wyglada-wnuk-elvisa-presleya.-podobny-zdjecia/351937-1-pol-PL/Tak-wyglada-wnuk-Elvisa-Presleya!-Podobny-do-legendarnego-dziadka-ZDJECIA_article.jpg" aspect-ratio="1.7" contain></v-img>
       <div class="subheading pt-4"></div>
       <v-img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492801689/articles/2012/10/01/speed-read-11-juiciest-bits-from-philip-norman-s-biography-of-mick-jagger/mick-jagger-speed-read-so_dg9fsk" aspect-ratio="1.7" contain></v-img>
       <div class="subheading pt-4"></div>
       <v-img src="https://d-pt.ppstatic.pl/k/r/1/10/cc/5a0d765107dde_p.jpg?1510930035" aspect-ratio="1.7" contain></v-img>
       <div class="subheading pt-4"></div>
      </v-col>
     </v-row>
    </v-container>
   </div>
  </v-app>
</template>

<script>
</script>
