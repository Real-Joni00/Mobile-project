import { View, Text, ScrollView, Pressable, KeyboardAvoidingView, Alert } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header.js'
import styles from '../../styles/style.js'
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Checkbox } from "react-native-paper";
import style from "../../styles/style.js";

export default Marketing = ({ navigation }) => {

	const [checkedEmail, setCheckedEmail] = useState(false)
	const [checkedSMS, setCheckedSMS] = useState(false)

	const handlePress = () => {
		if (checkedEmail == true) {
			setCheckedEmail(true)
		} 
		else if (checkedSMS == true) {
			setCheckedSMS(true)
		}
		else if (checkedEmail == false) {
			setCheckedEmail(false)
		}
		else if (checkedSMS == false)
			setCheckedSMS(false)
		else {
			Alert.alert('Your marketing preferences saved successfully!')
			navigation.navigate('LoggedUser')
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
          <Text style={styles.header}>My marketing preferences</Text>
					<Text style={styles.label}>You can contact me about Nordic Insight updates by:</Text>
					<View>
						<Checkbox.Item label='Email' status={checkedEmail ? 'checked' : 'unchecked'} labelStyle={{color:'white', fontSize: 20}} uncheckedColor="white" onPress={() => setCheckedEmail(!checkedEmail)}/>
						<Checkbox.Item label='SMS' status={checkedSMS ? 'checked' : 'unchecked'} labelStyle={{ color: 'white', fontSize: 20 }} uncheckedColor="white" onPress={() => setCheckedSMS(!checkedSMS)} />
					</View>
					<Pressable style={styles.button} onPress={handlePress}>
						<Text style={styles.buttonText}>SAVE YOUR PREFERENCES</Text>
					</Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}