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
                <div class="shade"><h3 class="shade-header">View Photos</h3></div>
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

<style src="../modules/style.module.css">
</style>