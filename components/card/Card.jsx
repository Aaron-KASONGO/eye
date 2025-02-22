import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Typography } from '../text/Text'

export const Card = ({children, style, variant='default', ...props}) => {
  let variantValue = {};

  switch (variant) {
    case 'default':
      variantValue = styles.default;
      break;
    
    case 'overflow':
      variantValue = styles.overflow;
      break;
  
    default:
      variantValue = styles.default;
      break;
  }

  return (
    <View
      {...props}
      style={{
        ...variantValue,
        ...style
      }}
    >
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
  default: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  overflow: {
    padding: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10
  }
})