import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Oslo = () => {

    const [osloyearsstudied, setOsloyearsstudied] = useState([]);
    const [osloworkingage, setOsloworkingage] = useState([]);
    const [oslomigration, setOslomigration] = useState([]);
    const [osloemigration, setOsloemigration] = useState([]);

    const yearsstudiedOslo = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Norja.agg",
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
          .then((json) => setOsloyearsstudied(json.dataset.value));
      }
  
      useEffect(() => {
        yearsstudiedOslo()
      }, [])

      const workingageOslo = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Norja.agg",
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
          .then((json) => setOsloworkingage(json.dataset.value));
      }
  
      useEffect(() => {
        workingageOslo()
      }, [])

      const migrationOslo = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Norja.agg",
                  "values": [
                    "3"
                  ]
                }
              },
              {
                "code": "Väestönmuutos",
                "selection": {
                  "filter": "item",
                  "values": [
                    "13"
                  ]
                }
              },
              {
                "code": "Vuosi",
                "selection": {
                  "filter": "item",
                  "values": [
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
          .then((json) => setOslomigration(json.dataset.value));
      }
  
      useEffect(() => {
        migrationOslo()
      }, [])

      const emigrationOslo = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Norja.agg",
                  "values": [
                    "3"
                  ]
                }
              },
              {
                "code": "Väestönmuutos",
                "selection": {
                  "filter": "item",
                  "values": [
                    "17"
                  ]
                }
              },
              {
                "code": "Vuosi",
                "selection": {
                  "filter": "item",
                  "values": [
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
          .then((json) => setOsloemigration(json.dataset.value));
      }
  
      useEffect(() => {
        emigrationOslo()
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
                            <Text style={styles.cityText}>Oslo</Text>
                                <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                                <View style={styles.cityImageView}>
                                    <Image source={require('../Norway/images/osloyearsstudied.jpg')} 
                                    style={styles.cityImages}
                                />
                                </View>
                                <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{osloyearsstudied[0]}</Text>
                                    {"\n"}2019: <Text style={styles.cityData}>{osloyearsstudied[1]}</Text>
                                    {"\n"}2020: <Text style={styles.cityData}>{osloyearsstudied[2]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{osloyearsstudied[3]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{osloyearsstudied[4]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Working age population</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{osloworkingage[0]}</Text>
                                    {"\n"}2019: <Text style={styles.cityData}>{osloworkingage[1]}</Text>
                                    {"\n"}2020: <Text style={styles.cityData}>{osloworkingage[2]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{osloworkingage[3]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{osloworkingage[4]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Migration</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{oslomigration[0]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{oslomigration[1]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{oslomigration[2]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Emigration</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{osloemigration[0]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{osloemigration[1]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{osloemigration[2]}</Text>
                                </Text>
                    </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Oslo