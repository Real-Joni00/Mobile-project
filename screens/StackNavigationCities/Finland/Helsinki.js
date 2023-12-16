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
          <Header/>
          <ScrollView style={styles.cityScrollview}>
                  <Text style={styles.cityText}>Helsinki</Text>
                  <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                  <View style={styles.cityImageView}>
                    <Image source={require('../Finland/images/helsinginkoulutusvuodet.jpg')} 
                      style={styles.cityImages}
                    />
                  </View>
                  <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{helsinginkoulutusvuodet[0]}</Text>
                  {"\n"}2018: <Text style={styles.cityData}>{helsinginkoulutusvuodet[1]}</Text>
                  {"\n"}2019: <Text style={styles.cityData}>{helsinginkoulutusvuodet[2]}</Text>
                  {"\n"}2020: <Text style={styles.cityData}>{helsinginkoulutusvuodet[3]}</Text>
                  {"\n"}2021: <Text style={styles.cityData}>{helsinginkoulutusvuodet[4]}</Text>
                  </Text>
                  <Text style={styles.citypgSubheaders}>Working age population</Text>
                  <View style={styles.cityImageView}>
                    <Image source={require('../Finland/images/helsingintyöikäiset.jpg')} 
                      style={styles.cityImages}
                    />
                  </View>
                  <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{helsingintyöikäiset[0]}</Text>
                  {"\n"}2018: <Text style={styles.cityData}>{helsingintyöikäiset[1]}</Text>
                  {"\n"}2019: <Text style={styles.cityData}>{helsingintyöikäiset[2]}</Text>
                  {"\n"}2020: <Text style={styles.cityData}>{helsingintyöikäiset[3]}</Text>
                  {"\n"}2021: <Text style={styles.cityData}>{helsingintyöikäiset[4]}</Text>
                  </Text>
            </ScrollView>
        </LinearGradient>
      </>
    )
}

export default Helsinki