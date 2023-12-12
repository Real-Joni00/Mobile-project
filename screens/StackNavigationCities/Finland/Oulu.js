import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Oulu = () => {

    const [oulunkoulutusvuodet, setOulunkoulutusvuodet] = useState([]);
    const [ouluntyöikäiset, setOuluntyöikäiset] = useState([]);

    const koulutusvuodetOulu = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
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
          .then((json) => setOulunkoulutusvuodet(json.dataset.value));
      }

      useEffect(() => {
        koulutusvuodetOulu()
      }, [])

      const työikäisetOulu = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
                  "values": [
                    "7"
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
          .then((json) => setOuluntyöikäiset(json.dataset.value));
      }

      useEffect(() => {
        työikäisetOulu()
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
                        <Text>Oulu</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/oulukoulutusvuodet.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text>Oulun asukkaita, joilla 13+ koulutusvuotta vuonna 2017 {oulunkoulutusvuodet[0]}, vuonna 2018 {oulunkoulutusvuodet[1]},
                        vuonna 2019 {oulunkoulutusvuodet[2]}, vuonna 2020 {oulunkoulutusvuodet[3]} ja vuonna 2021 {oulunkoulutusvuodet[4]}.
                        </Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/ouluntyöikäiset.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text>Oulun asukkaat, joista työikäisiä vuonna 2017 {ouluntyöikäiset[0]}, vuonna 2018 {ouluntyöikäiset[1]},
                        vuonna 2019 {ouluntyöikäiset[2]}, vuonna 2020 {ouluntyöikäiset[3]} ja vuonna 2021 {ouluntyöikäiset[4]}.
                        </Text>
                </>
            </LinearGradient>
        </>
    )
}

export default Oulu