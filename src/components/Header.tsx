import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.main}>
      <View > 
        <Image source={require('../assets/RottenTomatoesLogo.png')} 
          style={{width: 120, height: 70}}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingLeft: 10,

  },
})