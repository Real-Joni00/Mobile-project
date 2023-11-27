import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/style.js'

export default function Header() {

  return (
    <LinearGradient
      colors={['rgb(122, 33, 173)', 'rgb(191, 105, 238)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.5, 1]}
      style={styles.header}
    >
        <Text style={styles.title}>Nordic Insights</Text>

    </LinearGradient>
  );
};