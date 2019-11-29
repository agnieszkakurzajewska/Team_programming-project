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
    "photos/croatiaJersey.jpg",
    "photos/hackYeah.png");
myProfile.description = "Student 3 roku informatyki";

myProfile.loadProfilePage(document);

let followButton = document.getElementById("follow-user");

if(myProfile.hasFollower(myProfile)){
    followButton.onclick = unfollow;
    followButton.innerHTML = "Unfollow";
}else{
    followButton.onclick = follow;
}

function follow(){
    myProfile.addFollower(myProfile);
    myProfile.addFollowing(myProfile);
    followButton.onclick = unfollow;
    followButton.innerHTML = "Unfollow";
    myProfile.loadProfilePage(document);
}

function unfollow(){
    myProfile.dropFollower(myProfile);
    myProfile.dropFollowing(myProfile);
    followButton.onclick = follow;
    followButton.innerHTML = "Follow";
    myProfile.loadProfilePage(document);
}

function showFollowers(){
    let followers = "";
    for(let i=0; i<myProfile.followers.length; i++){
        followers += "\n" + myProfile.followers[0].name;
    }
    alert(followers);
}

function showFollowing(){
    let following = "";
    for(let i=0; i<myProfile.following.length; i++){
        following += "\n" + myProfile.following[0].name;
    }
    alert(following);
}

