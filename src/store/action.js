import firebaseConfig from '../config/firebaseConfig';
import firebase from 'firebase/app';

// const set_data = (data) => {
//     return (dispatch) => {
//         dispatch({
//             type: "SETDATA",
//             data: data
//         })
//     }
// }
const GoogleSignIn = () => {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;

            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }

            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
                .then(() => {
                    dispatch({
                        type: "SETUSER",
                        payload: create_user
                    })
                    alert("Login Successful");
                });


            console.log("USER==>", create_user);

        }).catch(function (error) {
            console.log("error")
        });
    }

}

const logOut = () => {

    return (dispatch) => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({
                    type: "LOGOUT",
                    payload: {}
                })

            })
        // dispatch({
        //     type: "LOGOUT",
        //     payload: null
        // })
        // this.props.history.push('/')

        console.log("Logout Running")

    }


}
export {
    GoogleSignIn,
    logOut
}