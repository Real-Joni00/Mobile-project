import { View, Text, TextInput, ScrollView, Pressable, KeyboardAvoidingView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header.js'
import styles from '../../styles/style.js'
import { Ionicons } from '@expo/vector-icons';

export default About = ({ navigation }) => {

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
          <Text style={styles.loggedHeader}>About us</Text>
          <Text style={styles.loggedMediumHeader}>Who are we?</Text>
          <Text style={styles.about} multiline='true'>Welcome to Nordic Insight, your gateway to a wealth of data from the enchanting Nordic countries. 
            {'\n'}{'\n'}We believe in the power of information to inspire, enlighten, and connect people. {'\n'}{'\n'}Our app is designed 
            to provide users with valuable insights into the diverse cultures, landscapes, and trends across the Nordic region.
            {'\n'}{'\n'}At Nordic Insight, we strive to be your trusted companion in exploring and understanding the data that shapes 
            the Nordic experience. {'\n'}{'\n'}Whether you're curious about the latest trends, historical patterns, or cultural nuances, 
            our app is here to empower you with knowledge. {'\n'}{'\n'}Join us on a journey of discovery as we unravel the stories hidden within the data of Denmark, Finland, Iceland, Norway, and Sweden. 
            {'\n'}{'\n'}Nordic Insight is more than an app; it's a passport to the fascinating world of Nordic data. {'\n'}{'\n'}
          </Text>
          <Text style={styles.loggedMediumHeader}>Privacy policy</Text>
          <Text style={styles.about} multiline='true'>
            Last updated: 12.11.2023 {'\n'}{'\n'}

            1. Information We Collect

            Nordic Insight collects data to enhance your experience and provide valuable insights. The information we collect includes:

            Personal information (e.g. email address) when you register or use our services.
            Usage data, such as the pages you visit and the features you use.
            Device information (e.g., device type, operating system) to optimize performance. {'\n'}{'\n'}
            2. How We Use Your Information

            We use your data to:

            Provide and improve the Nordic Insight app.
            Personalize your experience and deliver relevant content.
            Analyze app usage to enhance features and functionality.
            Communicate with you about updates, promotions, and important information. {'\n'}{'\n'}
            3. Data Sharing and Security

            We do not sell or share your personal information with third parties. Your data is securely stored and protected against unauthorized access. {'\n'}{'\n'}

            4. Your Choices

            You can control how we use your data by adjusting privacy settings within the Nordic Insight app. You may also opt out of promotional communications. {'\n'}{'\n'}

            5. Changes to This Privacy Policy

            We may update this privacy policy to reflect changes in our data practices. We encourage you to review it regularly. {'\n'}{'\n'}

            6. Contact Us

            If you have questions or concerns about this privacy policy, please contact us at info@nordicinsight.com. {'\n'}{'\n'}

            By using Nordic Insight, you agree to the terms outlined in this privacy policy. {'\n'}{'\n'}
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}