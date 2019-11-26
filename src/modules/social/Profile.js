class Profile {
    constructor(username, name, age){
        this.description = "";
        this.username = username;
        this.name = name;
        this.age = age;
        this.photos = [];
        this.friends = [];
        this.groups = [];
        this.observers = [];
        this.observing = [];
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

    addObserver(observer){
        this.observers.push(observer);
    }

    addOberving(observing){
        this.observing.push(observing);
    }

    addGroup(group){
        this.groups.push(group);
    }
}