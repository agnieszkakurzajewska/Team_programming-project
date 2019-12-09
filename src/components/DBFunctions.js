import db from './firebaseInit'

// dodaj uzytkownika
// wzorzec:
// if (firebase.auth().currentUser)
//   addUser(firebase.auth().currentUser.uid,firebase.auth().currentUser.email);
function addUser(id,email) {
    let data = {
        email: '',
        last_name: '',
        name: '',
        password: ''
    }
    data.email = email;
    db.collection('Users').doc(id).set(data);
}

// imie uzytkownika
// wzorzec:
// if (firebase.auth().currentUser)
//   setUserName(firebase.auth().currentUser.uid,"Adam");
function setUserName(id,name) {
    db.collection('Users').doc(id).update({name: name});
}

// nazwisko uzytkownika
// wzorzec:
// if (firebase.auth().currentUser)
//   setUserLastName(firebase.auth().currentUser.uid,"Kowalski");
function setUserLastName(id,nazwisko) {
    db.collection('Users').doc(id).update({last_name: nazwisko});
}

export {addUser,setUserName,setUserLastName};