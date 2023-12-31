import { View, Text, ScrollView, Pressable, KeyboardAvoidingView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header.js'
import styles from '../../styles/style.js'
import { Ionicons } from '@expo/vector-icons';

export default Manage = ({ navigation }) => {

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
          <Text style={styles.header}>Manage my profile</Text>
          <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Email')}>
            <Ionicons color='white' name='mail' size={26}><Text style={styles.profile}> Change my email</Text></Ionicons>
          </Pressable>
          <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Password')}>
            <Ionicons color='white' name='create' size={26}><Text style={styles.profile}> Change my password</Text></Ionicons>
          </Pressable>
          <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Marketing')}>
            <Ionicons color='white' name='newspaper' size={26}><Text style={styles.profile}> My marketing preferences</Text></Ionicons>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}