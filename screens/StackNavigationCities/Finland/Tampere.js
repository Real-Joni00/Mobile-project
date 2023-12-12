import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Tampere = () => {

    const [tampereenkoulutusvuodet, setTampereenkoulutusvuodet] = useState([]);
    const [tampereentyöikäiset, setTampereentyöikäiset] = useState([]);

    const koulutusvuodetTampere = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
                  "values": [
                    "5"
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
          .then((json) => setTampereenkoulutusvuodet(json.dataset.value));
      }

      useEffect(() => {
        koulutusvuodetTampere()
      }, [])

      const työikäisetTampere = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
                  "values": [
                    "5"
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
          .then((json) => setTampereentyöikäiset(json.dataset.value));
      }

      useEffect(() => {
        työikäisetTampere()
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
                        <Text>Tampere</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/tamperekoulutusvuodet.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text>Tampereen asukkaita, joilla 13+ koulutusvuotta vuonna 2017 {tampereenkoulutusvuodet[0]}, vuonna 2018 {tampereenkoulutusvuodet[1]},
                        vuonna 2019 {tampereenkoulutusvuodet[2]}, vuonna 2020 {tampereenkoulutusvuodet[3]} ja vuonna 2021 {tampereenkoulutusvuodet[4]}.
                        </Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/tampereentyöikäiset.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text>Tampereen asukkaat, joista työikäisiä vuonna 2017 {tampereentyöikäiset[0]}, vuonna 2018 {tampereentyöikäiset[1]},
                        vuonna 2019 {tampereentyöikäiset[2]}, vuonna 2020 {tampereentyöikäiset[3]} ja vuonna 2021 {tampereentyöikäiset[4]}.
                        </Text>
                </>
            </LinearGradient>
        </>
    )
}

export default Tampere