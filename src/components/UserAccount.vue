<template>
  <v-form align = "center" v-model="valid" >

    <v-col align="center">

      <h1 text-align="center"><br/><br/>Ustawienia konta</h1>

	  
	  <v-col cols="12" md="4">
	  <v-row>
        <v-text-field
          v-model="name"
          :rules="nameRules"
		  value=""
          label="name"
          placeholder="imiezbazy"
		  :disabled="nameLocked"
        ></v-text-field>
		<v-btn @click="nameLocked = !nameLocked" small = true>Edytuj</v-btn>
		</v-row>
      </v-col>
	  
      <v-col cols="12" md="4">
	  <v-row>
        <v-text-field
          v-model="lastname"
          :rules="lastnameRules"
		  value=""
          label="lastname"
          placeholder="nazwiskozbazy"
		  :disabled="lastnameLocked"
        ></v-text-field>
		<v-btn @click="lastnameLocked = !lastnameLocked" small = true>Edytuj</v-btn>
		</v-row>
      </v-col>
	  
	  
      <v-col cols="12" md="4">
	  <v-row>
        <v-text-field
          v-model="email"
          :rules="emailRules"
		  value=""
          label="E-mail"
          placeholder="emailzbazy"
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
          v-model="password"
		  :disabled=passwordLocked
          :type="passwordVisible ? 'text' : 'password'"
          name="input-10-2"
          label="Hasło"
          placeholder="haslozbazy "
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
        <v-btn v-on:click="login" color="primary">
          zapisz zmiany
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
	  emailLocked: true,
	  passwordLocked: true,
	  nameLocked: true,
	  lastnameLocked: true,
      email: '',
      password: '',
      valid: false,
      passwordRules: [
        v => !!v || 'Hasło jest wymagane',
      ],
      emailRules: [
        v => /.+@.+/.test(v) || 'Podany e-mail jest nieprawidłowy',
      ],

    }),
    methods: {

    }
  }
</script>