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

// ustal imie uzytkownika
// wzorzec:
// if (firebase.auth().currentUser)
//   setUserName(firebase.auth().currentUser.uid,"Adam");
function setUserName(id,name) {
    db.collection('Users').doc(id).update({name: name});
}

// ustal nazwisko uzytkownika
// wzorzec:
// if (firebase.auth().currentUser)
//   setUserLastName(firebase.auth().currentUser.uid,"Kowalski");
function setUserLastName(id,nazwisko) {
    db.collection('Users').doc(id).update({last_name: nazwisko});
}

// pobierz imie uzytkownika
// wzorzec
// if (firebase.auth().currentUser)
//   getUserName(firebase.auth().currentUser.uid).then(function (output) {
//           somestring = output;
//   }
function getUserName(id) {
    let userRef = db.collection('Users').doc(id);
    return userRef.get()
        .then( function(doc) {
            if (!doc.exists) {
                // eslint-disable-next-line no-console
                console.log('No such document!');
                return "";
            } else {
                // eslint-disable-next-line no-console
                console.log('Document data:',doc.data().name);
                return doc.data().name;
            }
        })
        .catch(err => {
            // eslint-disable-next-line no-console
            console.log('Error getting document', err);
            return "";
        });
}
// pobierz podroze uzytkownika
// wzorzec
// if (firebase.auth().currentUser)
//   getTravels(firebase.auth().currentUser.uid).then(function (output) {
//       somestring = output; // zwroci array ze stringami
//   }
function getTravels(id) {
    let userRef = db.collection('Travel_Members');
    return userRef.where('id_user', '==', id).get()
        .then(snapshot => {
            var travs = [];
            if (snapshot.empty) {
                // eslint-disable-next-line no-console
                console.log('No matching documents.');
                return travs;
            }

            snapshot.forEach(doc => {
                // eslint-disable-next-line no-console
                console.log(doc.id, '=>', doc.data(), typeof doc.data().id_travel);
                travs.push(doc.data().id_travel);
            });
            return travs;
        })
        .catch(err => {
            // eslint-disable-next-line no-console
            console.log('Error getting documents', err);
            return;
        });
}


export {addUser,setUserName,setUserLastName,getUserName,getTravels};