import { View, Text, TextInput, ScrollView, Pressable, KeyboardAvoidingView, Alert } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header.js'
import styles from '../../styles/style.js'
import { useState } from "react";
import { signUp } from "../../components/Auth.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/Config.js";
import { Ionicons } from '@expo/vector-icons';

export default Password = ({ navigation }) => {

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handlePress = () => {
    if (!password) {
      Alert.alert('Please input your current password');
    }
    else if (!newPassword) {
      Alert.alert('New password is required');
    }
    else if (!confirmNewPassword) {
      Alert.alert('You need to confirm your password');
    }
    else if (newPassword === confirmNewPassword) {
      Alert.alert('Confirmed password needs to match to your new password')
    }
    else {
      signUp(password);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate('LoggedUser', { userUid: user.uid });
          Alert.alert('Password changed successfully!')
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
          <Text style={styles.header}>Change my password</Text>
          <Text style={styles.label}>Current password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter your current password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            maxLength={40}
            placeholderTextColor={'white'}
          />
          <Text style={styles.label}>New password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter your new password"
            value={newPassword}
            onChangeText={(newPassword) => setNewPassword(newPassword)}
            maxLength={40}
            place
            holderTextColor={'white'}
          />
          <Text style={styles.label}>Confirm new password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Confirm your new password"
            value={confirmNewPassword}
            onChangeText={(confirmNewPassword) => setConfirmNewPassword(confirmNewPassword)}
            maxLength={40}
            placeholderTextColor={'white'}
          />
          <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>SAVE YOUR PASSWORD</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}