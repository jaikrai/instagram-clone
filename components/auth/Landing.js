import React from 'react';
import { Button, View } from 'react-native';


//props --> just like a argunment
export default function Landing({ navigation }){
    return (
        <View style={ {flex: 1, justifyCOntent: 'center'}}>
            <Button 
                title="Register"
                onPress={() => navigation.navigate("Register")}/>
                <Button 
                title="Login"
                onPress={() => navigation.navigate("Login")}/>
        </View>
    )
}


