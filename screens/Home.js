import { View, Text, Image, } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header.js'
import styles from '../styles/style.js'

export default Home = () => {
    return (
        <LinearGradient
            colors={['#77a8d6', '#0c4672', '#7c056e']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 1]}
            style={{ flex: 1 }}
        >
            <Header />
            <View style={styles.container} >
                <Image
                style={styles.image}
                source={require('../assets/logos/NordicInsightLogoSmall.png')}
                />
            <Text style={styles.frontPageTitle}>Nordic Insight</Text>
            </View>
        </LinearGradient>
    )
}