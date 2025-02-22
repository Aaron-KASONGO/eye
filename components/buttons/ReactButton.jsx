import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Typography } from '../text/Text'

export const Button = ({variant="primary", left={}, right={}, children, style, ...props}) => {

    return (
        <Pressable
            {...props}
            style={{
                ...styles.contained,
                ...style
            }}
        >
            <Typography
                style={styles.textStyle}
            >
                {children}
            </Typography>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contained: {
        backgroundColor: "#256CF5",
        padding: 10,
        borderRadius: 10
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        // fontWeight: 'bold',
    }
})
