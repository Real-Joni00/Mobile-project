import { View, KeyboardAvoidingView, Pressable, Text, TextInput} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../../components/Header.js";
import styles from "../../styles/style.js";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useState } from "react";
import { Button } from "react-native";

export default Forgot = () => {

  const [email, setEmail] = useState('');

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
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
              <ScrollView>
              <Text style={styles.headerForgot}>FORGOT MY PASSWORD</Text>
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
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>SEND VERIFICATION CODE</Text>
              </Pressable>
              </ScrollView>
          </KeyboardAvoidingView>
      </LinearGradient>
    )
}