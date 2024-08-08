import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';

export default function UploadImage({ caratula, setCaratula }) {
    const handleImagePick = async () => {
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

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;
            setImage(uri);
            // Subir la imagen a Firebase Storage
            const response = await fetch(uri);
            const blob = await response.blob();
            const task = storage().ref().child(`images/${Date.now()}`).put(blob);
            task.on('state_changed', taskSnapshot => {
                console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            });
            task.then(() => {
                console.log('Image uploaded to the bucket!');
            });
        } else {
            console.log('No se seleccionó ninguna imagen o hubo un error.');
        }
    };

    return (
        <View>
            <Text style={styles.label}>Caratula:</Text>
            <TouchableOpacity style={styles.button} onPress={handleImagePick}>
                <Text style={styles.buttonText}>Seleccionar Imagen</Text>
            </TouchableOpacity>
            {caratula && <Image source={{ uri: caratula }} style={styles.image} />}
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#525fe1',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 150,
        marginBottom: 15,
        borderRadius: 5,
    },
});