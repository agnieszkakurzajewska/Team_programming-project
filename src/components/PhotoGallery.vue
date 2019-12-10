<template>
    <main id="main-gallery">
    </main>
</template>

<script>
    import firebase from 'firebase'
    import db from './firebaseInit';

    export default {
        name: "PhotoGallery",
        data() {
            return {
                profile: location.href.split("?")[1]
            }
        },
        mounted(){
            this.loadAllPhotos();
        },
        methods:{
            loadAllPhotos(){
                console.log("Start");
                const storageRef = firebase.storage().ref();
                db.collection('Photos_Users').get().then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if(doc.data().id_user.id == this.profile) {
                            var photo = 'images/' + doc.data().id_photo;
                            //this.allPictures.push(photo); to na przyszłość, jakbym miał czas zrobić to ładniej
                            storageRef.child(photo).getDownloadURL().then(function (url) {
                                var cell = document.createElement('div');
                                cell.style.overflow = 'hidden';
                                cell.style.width = '25vw';
                                cell.style.height = '45vh';
                                var img = document.createElement('img');
                                img.src = url;
                                img.style.objectFit = 'cover';
                                img.style.width = '100%';
                                img.style.height = '100%';
                                cell.appendChild(img)
                                document.getElementById('main-gallery').appendChild(cell);
                            }).catch(() => {
                            });
                        }
                    });
                });
            }
        }
    }
</script>

<style scoped>
    main{
        display: flex;
        flex-wrap: wrap;
        flex: 1;
    }
</style>