import { View, Text, TextInput, ScrollView, Pressable, KeyboardAvoidingView, Alert } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header.js'
import styles from '../../styles/style.js'
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { signUp } from "../../components/Auth.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/Config.js";

export default Email = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email is required');
    }
    else if (!newEmail) {
      Alert.alert('New email is required');
    }
    else if (email === newEmail) {
      Alert.alert('Email is already in use')
    }
    else {
      signUp(email);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate('LoggedUser', {userUid: user.uid});
          Alert.alert('Email changed successfully!')
        }
      })
    }
  }

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
          <Text style={styles.header}>Change my email</Text>
          <Text style={styles.label}>Current email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            maxLength={100}
            placeholderTextColor={'white'}
            value={email}
            onChangeText={(email) => setEmail(email.trim())}
            autoCapitalize='none'
          />
          <Text style={styles.label}>New email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your new email"
            maxLength={100}
            placeholderTextColor={'white'}
            value={newEmail}
            onChangeText={(newEmail) => setNewEmail(newEmail.trim())}
            autoCapitalize='none'
          />
          <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>SAVE YOUR NEW EMAIL</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}