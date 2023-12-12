import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Turku = () => {

    const [turunkoulutusvuodet, setTurunkoulutusvuodet] = useState([]);
    const [turuntyöikäiset, setTuruntyöikäiset] = useState([]);

    const koulutusvuodetTurku = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
                  "values": [
                    "9"
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
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021"
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
          .then((json) => setTurunkoulutusvuodet(json.dataset.value));
      }

      useEffect(() => {
        koulutusvuodetTurku()
      }, [])

      const työikäisetTurku = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
                  "values": [
                    "9"
                  ]
                }
              },
              {
                "code": "Ikä",
                "selection": {
                  "filter": "item",
                  "values": [
                    "00"
                  ]
                }
              },
              {
                "code": "Sukupuoli",
                "selection": {
                  "filter": "item",
                  "values": [
                    "00"
                  ]
                }
              },
              {
                "code": "Vuosi",
                "selection": {
                  "filter": "item",
                  "values": [
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021"
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
          .then((json) => setTuruntyöikäiset(json.dataset.value));
      }

      useEffect(() => {
        työikäisetTurku()
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
                        <Text>Turku</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/turkukoulutusvuodet.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text>Turun asukkaita, joilla 13+ koulutusvuotta vuonna 2017 {turunkoulutusvuodet[0]}, vuonna 2018 {turunkoulutusvuodet[1]},
                        vuonna 2019 {turunkoulutusvuodet[2]}, vuonna 2020 {turunkoulutusvuodet[3]} ja vuonna 2021 {turunkoulutusvuodet[4]}.
                        </Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/turuntyöikäiset.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text>Turun asukkaat, joista työikäisiä vuonna 2017 {turuntyöikäiset[0]}, vuonna 2018 {turuntyöikäiset[1]},
                        vuonna 2019 {turuntyöikäiset[2]}, vuonna 2020 {turuntyöikäiset[3]} ja vuonna 2021 {turuntyöikäiset[4]}.
                        </Text>
                </>
            </LinearGradient>
        </>
    )
}

export default Turku