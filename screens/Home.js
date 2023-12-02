import { View, Text, Image, } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/style.js'

export default Home = () => {
    return (
        <LinearGradient
            colors={['#77a8d6', '#083455', '#7c056e']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 1]}
            style={{ flex: 1 }}
        >
          <View style={styles.container} >
            <Image
              style={styles.imageFront}
              source={require('../assets/logos/NordicInsightLogo.png')}
            />
            <Text style={styles.frontTitle}>nordic insight</Text>
            <Text style={styles.slogan}>Explore and understand Nordic cities through data</Text>
          </View>
        </LinearGradient>
    )
}