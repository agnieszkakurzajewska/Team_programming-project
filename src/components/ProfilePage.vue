<!--
    Strona główna profilu społecznego (dostępna pod adresem /profile-page)
    StyleSheet --- modules > styles > profile.style.module.css
    Zdjęcia pobierane z FireBase storage z podfolderu images/
    żeby podać id osoby, której profil ma być wyświetlony trzeba uzupełnić link o "?id=x", gdzie x to id osoby (np. 1 albo 9)

    Autor: Krzychu
-->
<template>
    <main id="main-profile">
        <section id="profile-info">
            <div id="profile-photo-div">
                <img id="profile-photo" src="">
            </div>
            <div id="profile-desc">
                <b><p id="personal-data">Name and surname, age</p></b>
                <div id="followers">
                    <v-btn id="followers-count" @click="showFollowers()">Followers: 0</v-btn>
                    <v-btn id="following-count" @click="showFollowing()">Following: 0</v-btn>
                </div>
                <p id="personal-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor malesuada velit, sed tincidunt libero tempor eget. Nullam ipsum lacus, laoreet in augue id, blandit hendrerit tellus. Cras id pel.</p>            </div>
        </section>

        <section id="profile-interact">
            <div id="view-photos-div">
                <!-- kliknięcie na cień przenosi do strony ze zdjęciami (która jeszcze nie działa) -->
                <a href="http://localhost:8080/#/photo-gallery"><div class="shade"><h3 class="shade-header">View Photos</h3></div></a>
                <div class="modal-displayer"></div>
                <div id="profile-show-photos">
                    <div class="row">
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                    </div>
                    <div class="row">
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                    </div>
                    <div class="row">
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                        <div class="cell"><img class="thumbnail-image" src=""></div>
                    </div>
                </div>
            </div>
            <div id="profile-buttons">
                <v-btn class="profile-button" @click="follow()" id="follow-user">Follow</v-btn>
                <v-btn class="profile-button" @click="message()" id="send-message">Send Message</v-btn>
            </div>
        </section>
    </main>
</template>

<script>
    import firebase from 'firebase';
    import db from './firebaseInit';

    export default {
        name: "ProfilePage",
        data() {
            return{
                profilePicture: '',
                //allPictures: [], to na przyszłość jakbym miał czas zrobić to ładniej
                storageRef: firebase.storage().ref(),
                profile: location.href.split("?")[1]
            }
        },
        mounted() {
            this.loadProfilePhoto();
            this.loadAllPhotos();
            this.loadFollow();
        },
        methods:{
            /**
             * Metoda ładująca zdjęcie profilowe z bazy danych w firebase
             * storageRef - referencja do storage w naszym firebase
             * profilePicture - ścieżka do zdjęcia profilowego (zadeklarowana wyżej w data());
             */
            loadProfilePhoto(){
                const storageRef = firebase.storage().ref();
                db.collection('Profiles').get().then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if(doc.data().id_user.id == this.profile){
                            console.log(doc.data());
                            this.profilePicture = 'images/' + doc.data().photo;
                            storageRef.child(this.profilePicture).getDownloadURL().then(function (url) {
                                var img = document.getElementById('profile-photo');
                                img.src = url;
                            });
                        }
                    });
                });
            },

            /**
             * Metoda ładująca wszystkie zdjęcia przypisane do użytkownika z bazy danych w firebase
             * działa na podstawie zapytań do bazy danych db (db.collection() zwraca obiekt Promise)
             * containers - tablica zawierająca wszystkie HTML img ze strony
             * storageRef - referencja do storage w naszym firebase
             * i - licznik kontrolujący czy nie pobieramy za dużo zdjęć
             */
            loadAllPhotos(){
                var i = 0;
                var containers = document.getElementsByClassName('thumbnail-image');
                const storageRef = firebase.storage().ref();
                db.collection('Photos_Users').get().then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if(doc.data().id_user.id == this.profile) {
                            if (i < containers.length) {
                                var photo = 'images/' + doc.data().id_photo;
                                //this.allPictures.push(photo); to na przyszłość, jakbym miał czas zrobić to ładniej
                                storageRef.child(photo).getDownloadURL().then(function (url) {
                                    var img = containers[i];
                                    img.src = url;
                                    i += 1;
                                });
                            }
                        }
                    });
                });
            },
            loadFollow(){
                var followers = document.getElementById('followers-count');
                var following = document.getElementById('following-count');

                db.collection('Profiles').get().then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if(doc.data().id_user.id == this.profile){
                            followers.innerHTML = 'Followers: ' + doc.data().followers;
                            following.innerHTML = 'Following: ' + doc.data().following;
                        }
                    });
                });
            },
            showFollowers(){},
            showFollowing(){},
            follow(){
            },
            message(){}
        }
    }
</script>

<style src="../modules/styles/profile.style.module.css">
</style>