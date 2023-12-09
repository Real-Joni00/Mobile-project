import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../../components/Header.js";
import styles from '../../styles/style.js'
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";


export default LoggedUser = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedScreen, setSelectedScreen] = useState('');

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
                    navigation.navigate('Profile', { userUid: user.uid });
                }
            });
        }
    }

    useEffect(() => {
        if (selectedScreen === 'Register') {
            navigation.navigate('Register')
            setSelectedScreen('')
        } else if (selectedScreen === 'Forgot') {
            navigation.navigate('Forgot')
            setSelectedScreen()
        }
    })

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
                <ScrollView>
                    <Text style={styles.header}>Hello user!</Text>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}