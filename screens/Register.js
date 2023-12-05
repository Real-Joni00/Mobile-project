import { View, Text, TextInput, ScrollView, Pressable } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header.js'
import styles from '../styles/style.js'

export default Register = () => {

    

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