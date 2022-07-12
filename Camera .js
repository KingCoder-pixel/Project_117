import * as React from 'react';
import { Button, Image, View, Platform } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import * as GetPermissions from 'expo-permissions';
export default class PickImage extends React.Component{
    state = {
        image:null
    }
};

getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (status !== 'granted'){
            alert("Sorry we need the camera rool permissions to make this work")

        }
    }
}


