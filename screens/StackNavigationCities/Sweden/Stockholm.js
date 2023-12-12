import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Stockholm = () => {

    const [stockholmyearsstudied, setStockholmyearsstudied] = useState([]);

    const yearsstudiedStockholm = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Ruotsi.agg",
                  "values": [
                    "3"
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
          .then((json) => setStockholmyearsstudied(json.dataset.value));
      }
  
      useEffect(() => {
        yearsstudiedStockholm()
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
                        <Text>Stockholm</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/tukholmankoulutusvuodet.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text>Stockholm residents who had studied more than 13 years in 2018 {stockholmyearsstudied[0]}, in 2019 {stockholmyearsstudied[1]},
                        in 2020 {stockholmyearsstudied[2]}, in 2021 {stockholmyearsstudied[3]} and in 2022 {stockholmyearsstudied[4]}.
                        </Text>
                </>
            </LinearGradient>
        </>
    )
}

export default Stockholm