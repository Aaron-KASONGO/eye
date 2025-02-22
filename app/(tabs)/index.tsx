import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Entypo } from '@expo/vector-icons';
import { useCameraPermissions } from 'expo-camera';
import * as DocumentPicker from 'expo-document-picker';
import { FloatingAction } from 'react-native-floating-action';
import { router } from 'expo-router';
import { CardImage } from '@/components/card-image/CardImage';

const actions = [
  {
    text: "Photo",
    icon: <Entypo name='camera' color={'white'} size={20} />,
    name: "bt_photo",
    position: 2
  },
  {
    text: "Charger",
    icon: <Entypo name='upload' color={'white'} size={20} />,
    name: "bt_charger",
    position: 1
  }
];

export default function TabOneScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const pickImage = async () => {
    const response = await DocumentPicker.getDocumentAsync({type: 'image/*'});
    console.log(response);
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
    <ScrollView

    >
        <View
          style={{
            padding: 10,
            rowGap: 10,
          }}
        >
          <Text
            style={styles.sectionText}
          >Historique</Text>
          <View
            style={styles.listView}
          >
            {/* <CardImage />
            <CardImage /> */}
            
          </View>
        </View>
    </ScrollView>
    
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
  listView: {
    gap: 10
  },
  sectionText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})
