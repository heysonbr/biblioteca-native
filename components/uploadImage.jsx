import React, { useState, useEffect } from 'react';
import { View, Button, Image, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseConfig';

export function UploadImage({ onImageUpload, onImageUploaded }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (imageUrl) {
            onImageUpload(imageUrl);
        }
    }, [imageUrl]);

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

            console.log(result);

            if (!result.canceled) {
                uploadImage(result.assets[0].uri);
            }
        } catch (error) {
            console.error("Error al seleccionar la imagen: ", error);
        }
    };

    const uploadImage = async (file) => {
        setUploading(true);
        try {
            const response = await fetch(file);
            const blob = await response.blob();

            const timestamp = Date.now();
            const random = Math.floor(Math.random() * 1000);
            const imageName = `image_${timestamp}_${random}`;
            const imageRef = ref(storage, `images/${imageName}`);

            await uploadBytes(imageRef, blob);

            const imageURL = await getDownloadURL(imageRef);
            setImageUrl(imageURL);
            if (onImageUploaded) {
                onImageUploaded();
            }
        } catch (error) {
            console.error("Error al subir la imagen: ", error);
        } finally {
            setUploading(false);
        }
    }

    return (
        <View className="gap-2 mt-2 mb-2">
            <Button title="Agregar imagen" onPress={selectImage} />
            {uploading ? <ActivityIndicator size="large" color="#0000ff" /> : (imageUrl && <Image className="rounded-xl " source={{ uri: imageUrl }} resizeMode="cover" style={{ width: 200, height: 300 }} />)}
        </View>
    );
}