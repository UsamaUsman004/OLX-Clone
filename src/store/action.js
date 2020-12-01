import firebaseConfig from '../config/firebaseConfig';
import firebase from 'firebase/app';
import { useStore } from 'react-redux';

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
        console.log("Logout Running")

    }
}

const Add_product = (data) => {
    return (dispatch) => {

        let product = {
            category: data.category,
            title: data.title,
            price: data.price,
            description: data.description,
            state: data.state,
            name: data.name,
            contact: data.contact,
            url: data.url,
            file: data.file
        }



        var ref = firebase.storage().ref().child(`images/${product.file.name}`).put(product.file)
        ref.on('state_changed', function (snapshot) {
            //progress
        },
            function (error) {
                //error
            },
            function () {
                //complete
                ref.snapshot.ref.getDownloadURL()
                    .then(function (downloadURL) {
                        console.log('File available at', downloadURL);
                        product.url = downloadURL
                        // console.log("Product yeh milrhai hai", product)

                        firebase.database().ref('/').child(`products/`).push(product)
                            .then(() => {
                                // dispatch({
                                //     type: "ADD_PRODUCT",
                                //     data: product
                                // })
                                alert("Send Successful");
                            });
                        // dispatch({
                        //     type: "ADD_PRODUCT",
                        //     data: product
                        // })
                    });
            }
        );

    }
}


const get_products = (data) => {
    return (dispatch) => {
        let Products = [];
        
        firebase.database().ref('/').child(`products/`).on('child_added', (data) => {
            console.log("Products==>", data.val())
            Products.push(data.val())
            dispatch({
                type: "ADD_PRODUCT",
                data: Products
            })
        })

        


    }
}





export {
    GoogleSignIn,
    logOut,
    Add_product,
    get_products
}