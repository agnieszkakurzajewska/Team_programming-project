<template>
    <main id="main-gallery">
        <div class="row">
            <div class="cell"><img class="thumbnail-image" src=""></div>
            <div class="cell"><img class="thumbnail-image" src=""></div>
            <div class="cell"><img class="thumbnail-image" src=""></div>
            <div class="cell"><img class="thumbnail-image" src=""></div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "PhotoGallery"
    }
</script>

<style scoped>
    .row{
        display: flex;
        flex: 1;
        height: 25vh;
    }

    .cell{
        flex: 1;
        opacity: 1;
        overflow: hidden;
    }
</style>