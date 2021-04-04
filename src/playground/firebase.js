import firebase from 'firebase/app';
import firebasedb from 'firebase/database';

const config = {
    apiKey: "AIzaSyBXnbTQXQkOHYe4TBpH9eyBfzUOCebU13Q",
    authDomain: "nextorsexpensify.firebaseapp.com",
    databaseURL: "https://nextorsexpensify-default-rtdb.firebaseio.com",
    projectId: "nextorsexpensify",
    storageBucket: "nextorsexpensify.appspot.com",
    messagingSenderId: "282984180980",
    appId: "1:282984180980:web:38b31e9f0c6d7c298882a1"
};

firebase.initializeApp(config);

const fdatabase = firebase.database();

// fdatabase.ref('users').on('value', (snapshot) => {
//     let value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// });

// setTimeout(() => {
//     fdatabase.ref('users').set({
//         name: 'Nextor',
//         age: 28,
//         isSingle: true,
//         location: {
//             city: 'Philadelphia',
//             country: 'United States'
//         },
//         job: {
//             title: 'Software Developer',
//             company: 'Amazon'
//         }
//     });
        
// }, 1000);

// fdatabase.ref('users/attributes').set({
//     height: 180,
//     weight: 85
// });

// fdatabase.ref('users/location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// const onValueChange = fdatabase.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     fdatabase.ref('users/age').set(29);
// }, 3500);

// setTimeout(() => {
//     fdatabase.ref().off(onValueChange); // cancels subscription
// }, 7000);

// setTimeout(() => {
//     fdatabase.ref('users/age').set(30);
// }, 10500);

//************************************ */
// Storing arrays
//************************************ */

// const expenses = [{
//     description: 'First expense',
//     note: 'very important',
//     amount: 125,
//     createdAt: 110
// },{
//     description: 'Second expense',
//     note: 'play smashh!',
//     amount: 1,
//     createdAt: 120
// },{
//     description: 'Third expense',
//     note: 'sleep early??',
//     amount: 0,
//     createdAt: 500
// }];

// for (let i = 0; i < expenses.length; i++) {
//     fdatabase.ref('expenses').push(expenses[i]);
// }

// fdatabase.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// child_removed
fdatabase.ref('expenses').on('child_removed', (snapshot) => {
    console.log('Child removed =>', snapshot.key, snapshot.val());
});

// child_changed
fdatabase.ref('expenses').on('child_changed', (snapshot) => {
    console.log('Child changed =>', snapshot.key, snapshot.val());
});

// child_added
fdatabase.ref('expenses').on('child_added', (snapshot) => {
    console.log('Child added =>', snapshot.key, snapshot.val());
});