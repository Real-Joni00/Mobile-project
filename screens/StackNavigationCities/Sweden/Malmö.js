import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Malmö = () => {

    const [malmöyearsstudied, setMalmöyearsstudied] = useState([]);

    const yearsstudiedMalmö = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Ruotsi.agg",
                  "values": [
                    "7"
                  ]
                }
              },
              {
                "code": "Koulutusvuosia",
                "selection": {
                  "filter": "item",
                  "values": [
                    "03"
                  ]
                }
              },
              {
                "code": "Vuosi",
                "selection": {
                  "filter": "item",
                  "values": [
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                    "2022"
                  ]
                }
              }
            ],
            "response": {
              "format": "json-stat"
            }
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then((response) => response.json())
          .then((json) => setMalmöyearsstudied(json.dataset.value));
      }
  
      useEffect(() => {
        yearsstudiedMalmö()
      }, [])

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
                    <Header/>
                        <Text>Malmö</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/malmöyearsstudied.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text>Malmö residents who had studied more than 13 years in 2018 {malmöyearsstudied[0]}, in 2019 {malmöyearsstudied[1]},
                        in 2020 {malmöyearsstudied[2]}, in 2021 {malmöyearsstudied[3]} and in 2022 {malmöyearsstudied[4]}.
                        </Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/malmöworkingagepopulation.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                </>
            </LinearGradient>
        </>
    )
}

export default Malmö