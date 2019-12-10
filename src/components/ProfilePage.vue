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
    require('firebase/auth');

    export default {
        name: "ProfilePage",
        data() {
            return{
                currentUser: firebase.auth().currentUser,
                profilePicture: '',
                followers: 0,
                following: 0,
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
                            this.profilePicture = 'images/' + doc.data().photo;
                            storageRef.child(this.profilePicture).getDownloadURL().then(function (url) {
                                var img = document.getElementById('profile-photo');
                                img.src = url;
                            });
                        }
                    });
                }).catch((error) => {
                    console.log(error);
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
                                }).catch(() => {
                                });
                            }
                        }
                    });
                });
            },
            /**
             * Metoda ładująca followersów z bazy danych i chowająca przyciski jeżeli użytkownik przegląda swój profil
             */
            loadFollow(){
                const followers = document.getElementById('followers-count');
                const following = document.getElementById('following-count');

                db.collection('Profiles').get().then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if(doc.data().id_user.id == this.profile){
                            this.followers = doc.data().followers;
                            this.following = doc.data().following;
                            followers.innerHTML = 'Followers: ' + this.followers;
                            following.innerHTML = 'Following: ' + this.following;
                        }
                    });
                });

                if(this.currentUser.uid == this.profile){
                    const buttons = document.getElementById('profile-buttons');
                    buttons.style.display = "none";
                }
            },

            /**
             * Funkcje wyświetlające followersów (jeszcze do zrobienia)
             */
            showFollowers(){},
            showFollowing(){},

            /**
             * funkcja zajmująca się dodawaniem/usuwaniem followersów
             * data - struktura zawierająca referencje do profili użytkowników
             */
            follow(){
                let data = {
                    id_follower: db.doc('Users/' + this.currentUser.uid),
                    id_user: db.doc('Users/' + this.profile)
                };
                db.collection('Followers').get().then((snapshot) => {
                    let broken = false;
                    for(let i=0; i<snapshot.size; i++) {
                        if ((snapshot.docs[i].data().id_user.id == data.id_user.id) && (snapshot.docs[i].data().id_follower.id == data.id_follower.id)) {
                            console.log("already followed");
                            db.collection('Followers').doc(snapshot.docs[i].id).delete();
                            db.collection('Profiles').get().then((profiles) => {
                                profiles.docs.forEach((profile) => {
                                    if(profile.data().id_user.id == this.profile){
                                        this.followers--;
                                        db.collection('Profiles').doc(profile.id).update({followers: this.followers})
                                    }
                                    if(profile.data().id_user.id == this.currentUser.uid){
                                        this.following--;
                                        db.collection('Profiles').doc(profile.id).update({following: this.following})
                                    }
                                });
                            });
                            console.log("deletion complete");
                            broken = true;
                        }
                    }
                    if(!broken){
                        db.collection('Followers').doc().set(data);
                        db.collection('Profiles').get().then((profiles) => {
                            profiles.docs.forEach((profile) => {
                                if(profile.data().id_user.id == this.profile){
                                    this.followers++;
                                    db.collection('Profiles').doc(profile.id).update({followers: this.followers})
                                }
                                if(profile.data().id_user.id == this.currentUser.uid){
                                    this.following++;
                                    db.collection('Profiles').doc(profile.id).update({following: this.following})
                                }
                            });
                        });
                        console.log("new follower added");
                    }
                });
                this.loadFollow();
            },
            message(){}
        }
    }
</script>

<style src="../modules/styles/profile.style.module.css">
</style>