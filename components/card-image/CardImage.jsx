import React from 'react'
import { Card } from '../card/Card'
import { Image, StyleSheet, Text, View } from 'react-native'

export const CardImage = ({title, description, ...props}) => {
  return (
    <Card
        variant='overflow'
        {...props}
    >
        <View
            style={styles.cardContentContainer}
        >
            <Image
                width={'40%'}
                height={100}
                style={styles.cardImage}
                source={{
                uri: "https://i.pinimg.com/564x/28/da/16/28da169bf92e08e11cfa4c2668ce4fd2.jpg"
                }}
            />
            <View
                style={styles.textContainer}
            >
                <Text style={styles.title}>Show skfjakfjkj</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum alias quos aliquid in quisquam temporibus nulla. Inventore porro dignissimos dolores harum alias reprehenderit officia, voluptatibus cum! Eos atque quas minima.
                </Text>
            </View>
        </View>
    </Card>
  )
}

const styles = StyleSheet.create({
    cardImage: {
      borderRadius: 10,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    cardContentContainer: {
      flexDirection: 'row'
    },
    textContainer: {
        paddingVertical: 10,
        padding: 10
    },
    title: {
        fontWeight: 'bold'
    },
    description: {
        overflow: 'hidden',
        maxWidth: '75%',
        maxHeight: 50,
        textAlign: 'justify',
        color: 'gray'
    }
  })
