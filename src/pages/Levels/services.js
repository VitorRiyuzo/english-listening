
import firebase from "../../config/firebase";
export const getNumbers = (level) => {
    return new Promise((resolve, reject) => {
        firebase.database().ref(level).once('value', (snapshot)=>{
            //console.log(snapshot.val());
            resolve(snapshot.val());
        } )
    })
};