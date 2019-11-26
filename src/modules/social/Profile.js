class Profile {
    constructor(username, name, age){
        this.description = "";
        this.username = username;
        this.name = name;
        this.age = age;
        this.photos = [];
        this.friends = [];
        this.groups = [];
        this.followers = [];
        this.following = [];
    }

    setProfilePhoto(path){
        this.photos[0] = path;
    }

    setProfileDescription(text){
        if(text.length < 250)
            this.description = text;
    }

    addPhoto(path){
        this.photos.push(path);
    }

    addPhotos(){
        for(let i=0; i<arguments.length; i++){
            this.photos.push(arguments[i]);
        }
    }

    removePhotoByPath(path){
        let pos = path.indexOf(path);
        this.removePhotoByIndex(pos);
    }

    removePhotoByIndex(index){
        this.photos.splice(index, 1);
    }

    addFriend(friend){
        this.friends.push(friend);
    }

    removeFriendByIndex(index){
        this.friends.splice(index, 1);
    }

    loadProfilePage(document){
        document.getElementById("personal-data").innerHTML = this.name + ", " + this.age;
        document.getElementById("personal-description").innerHTML = this.description;
        document.getElementById("profile-photo").src = this.photos[0];
        document.getElementById("followers-count").innerHTML = "Followers: " + this.followers.length;
        document.getElementById("following-count").innerHTML = "Following: " + this.following.length;

        if(this.photos.length>12){
            let imageDivs = document.getElementsByClassName("thumbnail-image");
            for (let i=0; i<imageDivs.length; i++){
                imageDivs[i].src = this.photos[i+1];
            }
            let cells = document.getElementsByClassName("cell");
            for (let i=0; i<cells.length; i++){
                cells[i].style.opacity = "1";
            }
        }
    }

    addFollower(follower){
        this.followers.push(follower);
    }

    dropFollower(follower){
        let index = this.followers.indexOf(follower);
        this.followers.splice(index, 1);
    }

    addFollowing(following){
        this.following.push(following);
    }

    dropFollowing(following){
        let index = this.following.indexOf(following);
        this.following.splice(index, 1);
    }

    addGroup(group){
        this.groups.push(group);
    }

    hasFollower(follower){
        return this.followers.includes(follower);
    }
}