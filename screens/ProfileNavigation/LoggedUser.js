import { Pressable, Text } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../../components/Header.js";
import styles from '../../styles/style.js'
import { ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default LoggedUser = ({ navigation }) => {
    return (
      <LinearGradient
          colors={['#77a8d6', '#083455', '#7c056e']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.5, 1]}
          style={{ flex: 1 }}
      >
      <Header />

        <ScrollView>
            <Text style={styles.header}>Hello User!</Text>
            <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Manage')}>
              <Ionicons color='white' name='settings' size={22}> Manage my profile</Ionicons>
            </Pressable>
            <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Searches')}> 
              <Ionicons color='white' name='save' size={22}> Saved searches</Ionicons>
            </Pressable>
            <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Results')}>
              <Ionicons color='white' name='trophy' size={22}> My top quiz results</Ionicons>
            </Pressable>
            <Pressable style={styles.iconLine} onPress={() => navigation.navigate('About')}>
              <Ionicons color='white' name='information' size={22}> About us</Ionicons>
            </Pressable>
            <Pressable style={styles.logout} onPress={() => navigation.navigate('Login')}>
              <Ionicons color='white' name='log-out' size={22}> Log out</Ionicons>
            </Pressable>
        </ScrollView>

      </LinearGradient>
    )
}