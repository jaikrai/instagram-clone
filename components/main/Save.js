import React, { useState } from "react";
import { View, TextInput, Image, Button } from "react-native";
import firebase from "firebase";

require("firebase/firestore");
require("firebase/firebase-storage");

export default function Save(props) {
  console.log(props.route.params.image);
  const [caption, setCaption] = useState("");

  const uploadImage = async () => {
    const uri = props.route.params.image;

    const childPath = `post/${
      firebase.auth().currentUser.uid
    }/${Math.random.toString(36)}`;
    console.log(childPath);

    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`);
    };

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        console.log(snapshot);
      });
    };
    const taskError = (snapshot) => {
      console.log(snapshot);
    };
    task.on("state_ change", taskProgress, taskError, taskCompleted);
  };

  return (
    <View>
      <Image source={{ uri: props.route.params.image }} />
      <TextInput
        placeholder="Write a caption..."
        onChangeText={(caption) => setCaption(caption)}
      />
      <Button title="Save" onPress={() => uploadImage()} />
    </View>
  );
}
