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
            <Pressable>
              <Text style={styles.loggedText}><Ionicons name='settings' size={25} />Manage my profile</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.loggedText}><Ionicons name='save' size={25} />Saved searches</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.loggedText}><Ionicons name='trophy' size={25} />My top quiz results</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.loggedText}><Ionicons name='ios-information-circle-sharp' size={25} />About us</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.logout}>Log out<Ionicons name='log-out' size={30} /></Text>
            </Pressable>
        </ScrollView>

      </LinearGradient>
    )
}