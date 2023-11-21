import { View, Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header.js'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import styles from '../styles/style.js'

export default Cities = () => {

    const [selectedCountry, setSelectedCountry] = useState('')

    const citiesByCountry = {
        Finland: ['Helsinki', 'Tampere', 'Turku', 'Oulu'],
        Sweden: ['Stockholm', 'Gothenburg', 'Malmö'],
        Norway: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger'],
        Denmark: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg'],
        Iceland: ['Reykjavik'],
    };

    return (
        <>
            <LinearGradient
                colors={['#79A7D3', '#234E70', '#8A307F']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.5, 1]}
                style={{ flex: 1 }}
            >
                <>
                    <Header />
                    {!selectedCountry ?
                        <View style={styles.flagContainer}>
                            <Pressable onPress={() => setSelectedCountry('Finland')} style={styles.flags}>
                                <LinearGradient
                                    colors={['#002F6C', '#FFFFFF']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.4, 1]}
                                    style={styles.flag}
                                >
                                    <Text style={styles.flagTitle}>Finland</Text>
                                </LinearGradient>
                            </Pressable>

                            <Pressable onPress={() => setSelectedCountry('Sweden')} style={styles.flags}>
                                <LinearGradient
                                    colors={['#FECC00', '#006AA7']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.4, 1]}
                                    style={styles.flag}
                                >
                                    <Text style={styles.flagTitle}>Sweden</Text>
                                </LinearGradient>
                            </Pressable>

                            <Pressable onPress={() => setSelectedCountry('Norway')} style={styles.flags}>
                                <LinearGradient
                                    colors={['#BA0C2F', '#00205B', '#FFFFFF']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.4, 0.5, 1]}
                                    style={styles.flag}
                                >
                                    <Text style={styles.flagTitle}>Norway</Text>
                                </LinearGradient>
                            </Pressable>

                            <Pressable onPress={() => setSelectedCountry('Denmark')} style={styles.flags}>
                                <LinearGradient
                                    colors={['#C8102E', '#FFFFFF']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.4, 1]}
                                    style={styles.flag}
                                >
                                    <Text style={styles.flagTitle}>Denmark</Text>
                                </LinearGradient>
                            </Pressable>

                            <Pressable onPress={() => setSelectedCountry('Iceland')} style={styles.flags}>
                                <LinearGradient
                                    colors={['#00529B', '#EE3423', '#FFFFFF']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.4, 0.5, 1]}
                                    style={styles.flag}
                                >
                                    <Text style={styles.flagTitle}>Iceland</Text>
                                </LinearGradient>
                            </Pressable>
                        </View>
                        :
                        <>
                            <View>
                                <Ionicons onPress={() => setSelectedCountry('')} name="arrow-back-circle-outline" size={54} color="white" style={styles.back} />
                            </View>
                            {selectedCountry && citiesByCountry[selectedCountry] && (
                                <View>
                                    {citiesByCountry[selectedCountry].map((city, index) => (
                                        <Text key={index} style={styles.city}>{city}</Text>
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