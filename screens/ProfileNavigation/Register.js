import { View, Text, TextInput, ScrollView, Pressable, KeyboardAvoidingView } from "react-native"
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
          <KeyboardAvoidingView
          behavior="height"
          style={{ flex: 1 }}
          >
          <View>
            <Pressable onPress={() => navigation.goBack()}>
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
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>CREATE USER</Text>
              </Pressable>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.alreadyUser}>Already a user? Login here</Text>
              </Pressable>
            </ScrollView>
          </KeyboardAvoidingView>
        </LinearGradient>
    )
}