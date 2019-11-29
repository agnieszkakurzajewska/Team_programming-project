<!--
    Strona główna profilu społecznego (dostępna pod adresem /profile-page)
    StyleSheet --- modules > styles > profile.style.module.css
    żeby podać id osoby, której profil ma być wyświetlony trzeba będzie uzupełnić link o "?id=x", gdzie x to id osoby (np. 1 albo 9) -- jeszcze nie działa
    bo baza danych nie jest zrobiona, uzupełnię tą funkcjonalność później.

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
                    <v-btn id="followers-count" onclick="showFollowers()">Followers: 0</v-btn>
                    <v-btn id="following-count" onclick="showFollowing()">Following: 0</v-btn>
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
                <v-btn class="profile-button" id="follow-user">Follow</v-btn>
                <v-btn class="profile-button" id="send-message">Send Message</v-btn>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: "ProfilePage"
    }
</script>

<style src="../modules/styles/profile.style.module.css">
</style>