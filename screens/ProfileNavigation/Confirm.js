import { View, KeyboardAvoidingView, Pressable, Text, TextInput } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../../components/Header.js";
import styles from "../../styles/style.js";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";

export default Confirm = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const [selectedScreen, setSelectedScreen] = useState('');


    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    useEffect(() => {
        if (isPressed === true) {
            navigation.navigate('Login')
        }
    })

    function allOnPressed() {
        navigation.goBack();

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
                    <Text style={styles.headerForgot}>ENTER YOUR VERIFICATION CODE</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter code"
                        maxLength={100}
                        placeholderTextColor={'white'}
                        value={email}
                        onChangeText={(email) => setEmail(email.trim())}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                    />
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Confirm')}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.profileBottomText}>I didn't receive a code. Try send it again.</Text>
                    </Pressable>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}