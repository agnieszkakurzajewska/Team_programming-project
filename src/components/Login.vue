<template>
  <v-form align = "center" v-model="valid" >

    <v-col align="center">

      <h1 text-align="center"><br/><br/>Logowanie</h1>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          placeholder=" "
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          required
          :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          v-model="password"
          :type="passwordVisible ? 'text' : 'password'"
          name="input-10-2"
          label="Hasło"
          placeholder=" "
          hint="At least 8 characters"
          value="wqfasds"
          :counter="15"
          class="input-group--focused"
          @click:append="passwordVisible  =!passwordVisible"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-btn v-on:click="login" color="primary">
          zaloguj się
        </v-btn>
      </v-col>

    </v-col>
  </v-form>
</template>


<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      passwordVisible: false,
      email: '',
      password: '',
      valid: false,
      passwordRules: [
        v => !!v || 'Hasło jest wymagane',
      ],
      emailRules: [
        v => !!v || 'E-mail jest wymagany',
        v => /.+@.+/.test(v) || 'Podany e-mail jest nieprawidłowy',
      ],

    }),
    methods: {
      login: function(e) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          user => {
            this.$router.go({path: this.$router.path});
          },
          err => {
            alert (err.message)

          })
        e.preventDefault();
      }
    }
  }
</script>