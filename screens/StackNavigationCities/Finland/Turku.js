import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Turku = () => {
    return (
        <>
            <LinearGradient
                colors={['#77a8d6', '#083455', '#7c056e']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.5, 1]}
                style={{ flex: 1 }}
            >
                <>
                    <Header/>
                        <Text>Turku</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/turkukoulutusvuodet.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                </>
            </LinearGradient>
        </>
    )
}

export default Turku