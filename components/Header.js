import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/style.js'

export default function Header() {
  return (
      <View style={styles.headerLogo}>
        <Image
          style={styles.imageHeader}
          source={require('../assets/logos/NordicInsightLogoWithText.png')}
        />    
        </View>
  );
};