import { View, Text, TextInput, ScrollView, Pressable, KeyboardAvoidingView, Alert } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header.js'
import styles from '../../styles/style.js'
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { signUp } from '../../components/Auth.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/Config.js';



export default Register = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('')

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email is required');
    }
    else if (!name){
      Alert.alert('Name is required')
    }
    else if (!password) {
      Alert.alert('Password is required');
    }
    else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirming password is required');
    }
    else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
    }
    else {
      signUp(name, email, password);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate('LoggedUser', {userUid: user.uid});
        }
      });
    }
  };

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
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                maxLength={100}
                placeholderTextColor={'white'}
                value={name}
                onChangeText={(name) => setName(name)}
                autoCapitalize='none'
              />
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                maxLength={100}
                placeholderTextColor={'white'}
                value={email}
                onChangeText={(email) => setEmail(email.trim())}
                autoCapitalize='none'
              />
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Enter your password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                maxLength={40}
                placeholderTextColor={'white'}
              />
              <Text style={styles.label}>Confirm password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                maxLength={40}
                placeholderTextColor={'white'}
              />
              <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>CREATE USER</Text>
              </Pressable>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.profileBottomText}>Already a user? Login here</Text>
              </Pressable>
            </ScrollView>
          </KeyboardAvoidingView>
        </LinearGradient>
    )
}