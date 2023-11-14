import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/style.js'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Nordic Insights</Text>
    </View>
  );
};