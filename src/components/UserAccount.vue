<template>
  <v-form align = "center" v-model="valid" >

    <v-col align="center">

      <h1 text-align="center"><br/><br/>Ustawienia konta</h1>

	  
	  <v-col cols="12" md="4">
	  <v-row>
        <v-text-field
		  value=""
          label=""
          id="name_id"
          ref="name_id"
          v-model="name"
          :placeholder=name
		  :disabled="nameLocked"
        ></v-text-field>
		<v-btn @click="nameLocked = !nameLocked" small = true>Edytuj</v-btn>
		</v-row>
      </v-col>
	  
      <v-col cols="12" md="4">
	  <v-row>
        <v-text-field
		  value=""
          label="Nazwisko"
          id="lastname_id"
          ref="lastname_id"
          v-model="lastname"
          :placeholder=lastname
		  :disabled="lastnameLocked"
        ></v-text-field>
		<v-btn @click="lastnameLocked = !lastnameLocked" small = true>Edytuj</v-btn>
		</v-row>
      </v-col>
	  
	  
      <v-col cols="12" md="4">
	  <v-row>
        <v-text-field
          :rules="emailRules"
		  value=""
		  id="email_id"
		  ref="email_id"
          label="E-mail"
          v-model="email"
          :placeholder = email
		  :disabled="emailLocked"
        ></v-text-field>
		<v-btn @click="emailLocked = !emailLocked" small = true>Edytuj</v-btn>
		</v-row>
      </v-col>
	
      <v-col cols="12" md="4">
	  <v-row>
        <v-text-field
          :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
		  :disabled=passwordLocked
          :type="passwordVisible ? 'text' : 'password'"
          name="input-10-2"
          label="Hasło"
          id="password_id"
          ref="password_id"
          :placeholder=password
          hint="At least 8 characters"
          value=""
          :counter="15"
          class="input-group--focused"
          @click:append="passwordVisible  =!passwordVisible"
        ></v-text-field>
		<v-btn @click="passwordLocked = !passwordLocked" small = true>Edytuj</v-btn>
		</v-row>
      </v-col>

      <v-col>
        <v-btn v-on:click="setName()" color="primary">
          zapisz zmiany
        </v-btn>
      </v-col>

    </v-col>
  </v-form>
</template>


<script>
  import firebase from 'firebase'
  import {getUser, setUserName, setUserLastName} from './DBFunctions'


  export default {
    data: () => ({
      passwordVisible: false,
	  emailLocked: true,
	  passwordLocked: true,
	  nameLocked: true,
	  lastnameLocked: true,

      email: "email",
      name: "name",
      lastname: "lastname",
      password: "password",

      valid: false,
      passwordRules: [
        v => !!v || 'Hasło jest wymagane',
      ],
      emailRules: [
        v => /.+@.+/.test(v) || 'Podany e-mail jest nieprawidłowy',
      ],

    }),
    created() {
            var self=this;

            if (firebase.auth().currentUser) {
               let data="???";
               getUser(firebase.auth().currentUser.uid).then(function (output) {
                       self.email = output["email"];
                       self.name = output["name"];
                       self.lastname = output["last_name"];
                       self.password = output["password"];
               });

            }
        },

    methods: {
            setName: function() {
                if (firebase.auth().currentUser) {
                   setUserName(firebase.auth().currentUser.uid, this.name);
                   setUserLastName(firebase.auth().currentUser.uid, this.lastname);
                }
            }
      }
  }

</script>