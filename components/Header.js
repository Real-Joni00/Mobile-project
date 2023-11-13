import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/style.js'

const Header = ({ title, style }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;