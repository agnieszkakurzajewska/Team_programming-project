let myProfile = new Profile("kris9", "Krzysztof Klęczek", 22);
myProfile.addPhotos("photos/sunnyDay.jpg",
    "photos/backJump.jpg",
    "photos/dubaiNight.png",
    "photos/monkey.png",
    "photos/meAndDad.png",
    "photos/windsurfing.jpg",
    "photos/wings.jpg",
    "photos/boney.png",
    "photos/rama.jpg",
    "photos/burjKhalifa.jpg",
    "photos/selfie.png",
    "photos/babyYoda.jpg",
    "photos/hackYeah.png");
myProfile.description = "Student 3 roku informatyki";

myProfile.loadProfilePage(document);