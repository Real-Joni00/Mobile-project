import { View, Text, TextInput, ScrollView, Pressable } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header.js'
import styles from '../../styles/style.js'
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";

export default Register = ({ navigation }) => {

  const [isPressed, setIsPressed] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState('');


  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    if (selectedScreen === 'Login') {
      navigation.navigate('Login')
    } 
  })

    return (
        <LinearGradient
            colors={['#77a8d6', '#083455', '#7c056e']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 1]}
            style={{ flex: 1 }}
        >
          <Header />

          <View>
            <Pressable onPress={() => setSelectedScreen('Login')} onPressIn={handlePressIn} onPressOut={handlePressOut}>
              {({ pressed }) => (
                <Ionicons
                  name="arrow-back-circle-outline"
                  size={54}
                  color={pressed ? '#000000' : '#FFFFFF'}
                  style={styles.back}
                />
              )}
            </Pressable>
          </View>

          <View>
            <ScrollView>
              <Text style={styles.header}>Register</Text>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                maxLength={100}
                placeholderTextColor={'white'}
              />
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Enter your password"
                maxLength={40}
                placeholderTextColor={'white'}
              />
              <Text style={styles.label}>Confirm password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Confrim your password"
                maxLength={40}
                placeholderTextColor={'white'}
              />
              <Pressable>
                <Text style={styles.user}>Already a user?</Text>
              </Pressable>
            </ScrollView>
          </View>
        </LinearGradient>
    )
}