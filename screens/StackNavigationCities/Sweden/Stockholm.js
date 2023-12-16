import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Stockholm = () => {

    const [stockholmyearsstudied, setStockholmyearsstudied] = useState([]);
    const [stockholmworkingage, setStockholmworkingage] = useState([]);

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

      const workingagepopulationStockholm = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
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
          .then((json) => setStockholmworkingage(json.dataset.value));
      }
  
      useEffect(() => {
        workingagepopulationStockholm()
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
                        <Text style={styles.cityText}>Stockholm</Text>
                        <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/tukholmankoulutusvuodet.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{stockholmyearsstudied[0]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{stockholmyearsstudied[1]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{stockholmyearsstudied[2]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{stockholmyearsstudied[3]}</Text>
                          {"\n"}2022: <Text style={styles.cityData}>{stockholmyearsstudied[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Working age population</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/stockholmworkingagepopulation.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Stockholm