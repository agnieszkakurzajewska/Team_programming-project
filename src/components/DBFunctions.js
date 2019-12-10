import db from './firebaseInit'

// add user
// usage:
// if (firebase.auth().currentUser)
//   addUser(firebase.auth().currentUser.uid,firebase.auth().currentUser.email);
function addUser(id,email) {
    let data = {
        email: '',
        last_name: '',
        name: '',
        password: '',
        photo: ''
    };
    data.email = email;
    db.collection('Users').doc(id).set(data);
    let profileData = {
        desc: '',
        followers: 0,
        following: 0,
        home: '',
        id_user: db.doc('Users/' + id),
        photo: '',
    };
    db.collection('Profiles').doc().set(profileData);
    console.log('account created');
}

// set user name
// usage:
// if (firebase.auth().currentUser)
//   addUser(firebase.auth().currentUser.uid,"Adam");
function UserName(id,name) {
    db.collection('Users').doc(id).update({name: name});
}

export {addUser,UserName};