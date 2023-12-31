import { View, Text, TextInput, ScrollView, Pressable, KeyboardAvoidingView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header.js'
import styles from '../../styles/style.js'
import { Ionicons } from '@expo/vector-icons';

export default Register = ({ navigation }) => {

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
        <Text style={styles.createPassword}>CREATE NEW PASSWORD</Text>
         <Text style={styles.label}>Enter new password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter new password"
            maxLength={40}
            placeholderTextColor={'white'}
          />

          <Text style={styles.label}>Confirm new password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Confirm your password"
            maxLength={40}
            placeholderTextColor={'white'}
          />
          <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}