import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header.js'
import styles from '../styles/style.js'
import { ScrollView } from "react-native";
import { useState } from "react";


export default Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email is required');
    }
    else if (!password) {
      Alert.alert('Password is required');
    }
    else {
      signIn(email, password);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate('Todo', { userUid: user.uid });
        }
      });
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
            <ScrollView>
              <Text style={styles.header}>LOGIN</Text>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                maxLength={100}
                placeholderTextColor={'white'}
                value={email}
                onChangeText={(email) => setEmail(email.trim())}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Enter your password"
                maxLength={40}
                placeholderTextColor={'white'}
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
              <Text style={styles.forgotPassword}>Forgot password?</Text>
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.user}>Are you a new user?</Text>
              </Pressable>
            </ScrollView>
          </View>
          </KeyboardAvoidingView>
      </LinearGradient>
  )
}