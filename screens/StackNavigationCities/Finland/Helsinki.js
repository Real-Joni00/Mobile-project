import { View, Text, Image, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Helsinki = () => {

  const [helsinginkoulutusvuodet, setHelsinginkoulutusvuodet] = useState([]);
  const [helsingintyöikäiset, setHelsingintyöikäiset] = useState([]);

  const koulutusvuodetHelsinki = () => {
      fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
        method: "POST",
        body: JSON.stringify({
          "query": [
            {
              "code": "Alue",
              "selection": {
                "filter": "agg:Suomi.agg",
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
        .then((json) => setHelsinginkoulutusvuodet(json.dataset.value));
    }

    useEffect(() => {
      koulutusvuodetHelsinki()
    }, [])

    const työikäisetHelsinki = () => {
      fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
        method: "POST",
        body: JSON.stringify({
          "query": [
            {
              "code": "Alue",
              "selection": {
                "filter": "agg:Suomi.agg",
                "values": [
                  "3"
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
        .then((json) => setHelsingintyöikäiset(json.dataset.value));
    }

    useEffect(() => {
      työikäisetHelsinki()
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
          <ScrollView>
              <Header/>
                  <Text>Helsinki</Text>
                  <View style={styles.cityImageView}>
                    <Image source={require('../Finland/images/helsinginkoulutusvuodet.jpg')} 
                      style={styles.cityImages}
                    />
                  </View>
                  <Text>Helsingin asukkaita, joilla 13+ koulutusvuotta vuonna 2017 {helsinginkoulutusvuodet[0]}, vuonna 2018 {helsinginkoulutusvuodet[1]},
                        vuonna 2019 {helsinginkoulutusvuodet[2]}, vuonna 2020 {helsinginkoulutusvuodet[3]} ja vuonna 2021 {helsinginkoulutusvuodet[4]}.
                  </Text>
                  <View style={styles.cityImageView}>
                    <Image source={require('../Finland/images/helsingintyöikäiset.jpg')} 
                      style={styles.cityImages}
                    />
                  </View>
                  <Text>Helsingin asukkaista työikäisiä vuonna 2017 {helsingintyöikäiset[0]}, vuonna 2018 {helsingintyöikäiset[1]},
                        vuonna 2019 {helsingintyöikäiset[2]}, vuonna 2020 {helsingintyöikäiset[3]} ja vuonna 2021 {helsingintyöikäiset[4]}.
                  </Text>
            </ScrollView>
        </LinearGradient>
      </>
    )
}

export default Helsinki