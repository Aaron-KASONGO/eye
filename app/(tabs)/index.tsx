import { Pressable, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useCameraPermissions } from 'expo-camera';
import * as DocumentPicker from 'expo-document-picker';
import { FloatingAction } from 'react-native-floating-action';
import { router } from 'expo-router';
import { CardImage } from '@/components/card-image/CardImage';
import axios from 'axios';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

const actions = [
  {
    text: "Photo",
    icon: <Entypo name='camera' color={'white'} size={20} />,
    name: "bt_photo",
    position: 2,
  },
  {
    text: "Charger",
    icon: <Entypo name='upload' color={'white'} size={20} />,
    name: "bt_charger",
    position: 1
  }
];

const mainPath = "https://zany-acorn-vwgwqjr6v6jhp7g5-8000.app.github.dev/detect-object"

export default function TabOneScreen() {
  const [loading, setLoading] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponseAudio, requestPermissionAudio] = Audio.usePermissions();

  // const fileToBlob = async (file: File) => {
  //   try {
  //     const response = await fetch(file.uri);
  //     const blob = await response.blob(); // Conversion du fichier en Blob
  //     return blob;
  //   } catch (error) {
  //     console.error('Erreur lors de la conversion du fichier en Blob:', error);
  //   }
  // };

  const pickImage = async () => {
    setLoading(true);
    const response = await DocumentPicker.getDocumentAsync({type: 'image/*'});

    const formData = new FormData();
    
    // if (response.assets) {
    //   console.log(response.assets[0].uri)
    // }

    if (response.assets) {
      const file = response.assets[0]

      console.log(file.uri);


      formData.append('file', {
        uri: file.uri,
        type: file.mimeType,
        name: file.name
      } as any)

      // const respon = await axios.get('https://zany-acorn-vwgwqjr6v6jhp7g5-8000.app.github.dev')
      // console.log(respon)

      // const resp = await axios.post(mainPath, formData, {
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'multipart/form-data',
      //   }
      // });
      await playSound();
      setLoading(false);
      // console.log(resp.data);
    }

  }

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: 'https://res.cloudinary.com/mouss/video/upload/v1742964704/music_test/mxvfvh432bjf0dgsempt.mp3'
    });
    sound.playAsync();
  }

  const getPermissionAudio = async () => {
    try {
      if (permissionResponseAudio?.status !== 'granted') {
        console.log('Requesting permission...');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  }

  useEffect(() => {
    getPermissionAudio();
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
          style={{
            padding: 10,
            rowGap: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
          }}
        >
          <FontAwesome name='cloud-upload' color={"rgba(6, 65, 201, 1)"} size={100} />
          <Pressable
            style={styles.button}
            onPress={() => pickImage()}
          >
          <Text
            style={styles.sectionText}
            accessibilityLabel="Charger une image"
            accessibilityHint="Bouton pour charger l'image"
          >Charger une image</Text>
            
          </Pressable>
      </View>
    
      <FloatingAction
        
        actions={actions}
        onPressItem={name => {
          switch (name) {
            case 'bt_photo':
              if (permission) {
                if (permission.granted) {
                  router.navigate('/float-action/camera', {relativeToDirectory: true})
                } else {
                  requestPermission();
                }
              }
              break;
            
            case 'bt_charger':
              pickImage();
              break;
          
            default:
              break;
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    gap: 10,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
  sectionText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})
