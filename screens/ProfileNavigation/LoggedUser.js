import { Pressable, Text } from "react-native";
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../../components/Header.js";
import styles from '../../styles/style.js'
import { ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { onValue, query, ref } from 'firebase/database';
import { db, USERS_REF} from '../../firebase/Config.js';
import { logout } from '../../components/Auth.js';

export default LoggedUser = ({ navigation, route }) => {

    const [userKey, setUserKey] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
      setUserKey(route.params.userUid);
      const userRef = query(ref(db, USERS_REF + route.params.userUid));
      onValue(userRef, (snapshot) => {
        snapshot.val()
          ? setName(snapshot.val().name)
          : setName('')
      });
    }, []);

    const handlePress = () => {
      logout();
      navigation.replace('Login')
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

        <ScrollView>
            <Text style={styles.header}>Hello {name}!</Text>
            <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Manage')}>
            <Ionicons color='white' name='settings' size={26}><Text style={styles.profile}> Manage my profile</Text></Ionicons>
            </Pressable>
            <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Searches')}> 
            <Ionicons color='white' name='save' size={26}><Text style={styles.profile}> Saved searches</Text></Ionicons>
            </Pressable>
            <Pressable style={styles.iconLine} onPress={() => navigation.navigate('Results')}>
            <Ionicons color='white' name='trophy' size={26}><Text style={styles.profile}> My top quiz results</Text></Ionicons>
            </Pressable>
            <Pressable style={styles.iconLine} onPress={() => navigation.navigate('About')}>
            <Ionicons color='white' name='information' size={26}><Text style={styles.profile}> About us</Text></Ionicons>
            </Pressable>
            <Pressable style={styles.logout} onPress={handlePress}>
            <Ionicons color='white' name='log-out' size={26}><Text style={styles.profile}> Log out</Text></Ionicons>
            </Pressable>
        </ScrollView>

      </LinearGradient>
    )
} 