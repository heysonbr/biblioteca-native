import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Storage } from '../firebaseConfig';

export function UploadImage({ onImageUpload }) {
    const [imageUrl, setImageUrl] = useState(null);

    const selectImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permiso necesario', 'Necesitamos permisos para acceder a tu galería de imágenes.');
                return;
            }

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                uploadImage(result.uri);
            }
        } catch (error) {
            console.error("Error al seleccionar la imagen: ", error);
        }
    };


    const uploadImage = async (uri) => {


        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            console.log('Blob:', blob);

            const imageName = new Date().getTime();
            const imageRef = ref(Storage, `images/${imageName}`);
            console.log('Image Ref:', imageRef);

            console.log('Subiendo imagen...');
            await uploadBytes(imageRef, blob);
            console.log('Imagen subida, obteniendo URL...');
        } catch (error) {
            console.error("Error al subir la imagen: ", error);
        }

    };

    return (
        <View>
            <Button title="Seleccionar imagen" onPress={selectImage} />
            {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}