import { statusBarHeight } from '@/constants/generalContants';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ActionLayout = () => {
  return (
    <Stack
    >
        <Stack.Screen
            name='camera'
            options={{ header: (props) => {
                // console.log()
                return (
                    <>
                    <View
                        style={styles.headerContainer}
                    >
                        <Pressable
                            style={styles.backButton}
                            onPress={() => props.navigation.goBack()}
                        >
                            <Ionicons name='arrow-back' size={20} />
                        </Pressable>
                        {/* <Text></Text> */}
                    </View>
                    </>
                )
            } }}
        />
    </Stack>
  )
}

export default ActionLayout;

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: statusBarHeight,
        position: 'absolute',
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButton: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5
    }
})
