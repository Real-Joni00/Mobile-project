import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header.js'
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../styles/style.js'
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Helsinki from './StackNavigationCities/Finland/Helsinki.js';
import { set } from '@firebase/database';

export default Cities = () => {

    const navigation = useNavigation()

    const [selectedCountry, setSelectedCountry] = useState('')
    const [isPressed, setIsPressed] = useState(false)
    const [selectedCity, setSelectedCity] = useState('')

    const citiesByCountry = {
        Finland: ['Helsinki', 'Tampere', 'Turku', 'Oulu'],
        Sweden: ['Stockholm', 'Gothenburg', 'Malmö'],
        Norway: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger'],
        Denmark: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg'],
        Iceland: ['Reykjavik'],
    };

    //For setting the color for the background of the listed cities
    const cityBackgroundColors = {
        Finland: ['#002F6C', '#FFFFFF'],
        Sweden: ['#006AA7', '#FECC00'],
        Norway: ['#BA0C2F', '#00205B'],
        Denmark: ['#C8102E', '#FFFFFF'],
        Iceland: ['#00529B', '#EE3423'],
    };

    const getCityBackgroundColors = (country) => {
        return cityBackgroundColors[country] || ['#FFFFFF', '#FFFFFF'];
    };

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    // Navigation for all countries 
    useEffect(() => {
        if (selectedCity) {
            const countryCities = citiesByCountry[selectedCountry];

            if (countryCities && countryCities.includes(selectedCity)) {
                navigation.navigate(selectedCity);
                setSelectedCity(selectedCity);
            }
        }
    }, [selectedCity, selectedCountry, citiesByCountry, navigation]);

    useEffect(() => {
        const handleBackPress = () => {
            if (selectedCountry) {
                // If a country is selected, go back to the city selection screen
                setSelectedCountry('');
                setSelectedCity('');
                return true;
            } else {
                // If no country or city is selected, allow default back behavior
                return false;
            }
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    
        // Cleanup the event listener when the component is unmounted
        return () => backHandler.remove();
    }, [selectedCountry]);

    return (
        <>
            <LinearGradient
                colors={['#77a8d6', '#083455', '#7c056e']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.5, 1]}
                style={{ flex: 1 }}
            >
                <>
                    <Header />
                    {!selectedCountry ?
                    <ScrollView>
                        <View style={styles.flagContainer}>
                            <Pressable onPress={() => setSelectedCountry('Finland')} style={styles.flags}>
                                {({ pressed }) => (
                                    <LinearGradient
                                        colors={['#002F6C', '#FFFFFF']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.4, 1]}
                                        style={[styles.flag, { borderColor: pressed ? '#000000' : '#FFFFFF' }]}
                                    >
                                        <Text style={[styles.flagTitle, { color: pressed ? '#000000' : '#FFFFFF' }]}>Finland</Text>
                                    </LinearGradient>
                                )}
                            </Pressable>

                            <Pressable onPress={() => setSelectedCountry('Sweden')} style={styles.flags}>
                                {({ pressed }) => (
                                    <LinearGradient
                                        colors={['#006AA7', '#FECC00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.4, 1]}
                                        style={[styles.flag, { borderColor: pressed ? '#000000' : '#FFFFFF' }]}
                                    >
                                        <Text style={[styles.flagTitle, { color: pressed ? '#000000' : '#FFFFFF' }]}>Sweden</Text>
                                    </LinearGradient>
                                )}
                            </Pressable>

                            <Pressable onPress={() => setSelectedCountry('Norway')} style={styles.flags}>
                                {({ pressed }) => (
                                    <LinearGradient
                                        colors={['#BA0C2F', '#00205B']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.4, 0.9]}
                                        style={[styles.flag, { borderColor: pressed ? '#000000' : '#FFFFFF' }]}
                                    >
                                        <Text style={[styles.flagTitle, { color: pressed ? '#000000' : '#FFFFFF' }]}>Norway</Text>
                                    </LinearGradient>
                                )}
                            </Pressable>

                            <Pressable onPress={() => setSelectedCountry('Denmark')} style={styles.flags}>
                                {({ pressed }) => (
                                    <LinearGradient
                                        colors={['#C8102E', '#FFFFFF']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.4, 1]}
                                        style={[styles.flag, { borderColor: pressed ? '#000000' : '#FFFFFF' }]}
                                    >
                                        <Text style={[styles.flagTitle, { color: pressed ? '#000000' : '#FFFFFF' }]}>Denmark</Text>
                                    </LinearGradient>
                                )}
                            </Pressable>

                            <Pressable onPress={() => setSelectedCountry('Iceland')} style={styles.flags}>
                                {({ pressed }) => (
                                    <LinearGradient
                                        colors={['#00529B', '#EE3423']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.4, 0.9]}
                                        style={[styles.flag, { borderColor: pressed ? '#000000' : '#FFFFFF' }]}
                                    >
                                        <Text style={[styles.flagTitle, { color: pressed ? '#000000' : '#FFFFFF' }]}>Iceland</Text>
                                    </LinearGradient>
                                )}
                            </Pressable>
                        </View>
                    </ScrollView>
                        :
                        <>

                            <View>
                                <Pressable onPress={() => setSelectedCountry('')} onPressIn={handlePressIn} onPressOut={handlePressOut}>
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

                            {selectedCountry && citiesByCountry[selectedCountry] && (
                                <View>
                                    {citiesByCountry[selectedCountry].map((city, index) => (
                                        <Pressable key={index} onPress={() => setSelectedCity(city)}>
                                            {({ pressed }) => (
                                                <LinearGradient
                                                    key={index}
                                                    colors={getCityBackgroundColors(selectedCountry)}
                                                    start={{ x: 0.5, y: 0 }}
                                                    end={{ x: 0.5, y: 1 }}
                                                    locations={[0.7, 1]}
                                                    style={[styles.cityBg, { borderColor: pressed ? '#000000' : '#FFFFFF' }]}
                                                >
                                                    <Text key={index} style={[styles.cityText, { color: pressed ? '#000000' : '#FFFFFF' }]}>{city}</Text>
                                                </LinearGradient>
                                            )}
                                        </Pressable>
                                    ))}
                                </View>
                            )}
                        </>
                    }
                </>

            </LinearGradient>
        </>
    )
}