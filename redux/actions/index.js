import firebase from "firebase";
import { USER_STATE_CHANGE } from "../constant";

export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("user")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshoot) => {
        if (snapshoot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshoot.data() });
        } else {
          console.log("does not exist");
        }
      });
  };
}
