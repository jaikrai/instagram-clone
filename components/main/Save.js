import React from "react";
import { View, TextInput, Image, Button } from "react-native";

export default function Save(props) {
  console.log(props.route.params.image);
  const [caption, setCaption] = useState("");
  return (
    <View>
      <Image source={{ uri: props.route.params.image }} />
      <TextInput
        placeholder="Write a caption..."
        onChangeText={(caption) => setCaption(caption)}
      />
      <Button title="Save" />
    </View>
  );
}
