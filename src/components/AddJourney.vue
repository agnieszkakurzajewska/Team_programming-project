<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title>
          tutja bedzie logowanie ewent dodwanie podrozy
        </v-card-title>
        <v-card-text>
           a tutaj v-form
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">dobra</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>