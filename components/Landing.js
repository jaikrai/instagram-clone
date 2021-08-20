import { Button, View } from "react-native";
import React from 'react'


//props --> just like a argunment
export default function Landing({ navigation }){
    return (
        <View style={ {flex: 1, justifyCOntent: 'center'}}>
            <Button 
                title="Register"
                onPress={() => navigation.naviagte("Register")}/>
                <Button 
                title="Login"
                onPress={() => navigation.naviagte("Login")}/>
        </View>
    )
}

