import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Aarhus = () => {

    const [aarhusyearsstudied, setAarhusyearsstudied] = useState([]);
    const [aarhusworkingage, setAarhusworkingage] = useState([]);
    const [aarhusmigration, setAarhusmigration] = useState([]);
    const [aarhusemigration, setAarhusemigration] = useState([]);

    const yearsstudiedAarhus = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Tanska.agg",
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
          .then((json) => setAarhusyearsstudied(json.dataset.value));
      }
  
      useEffect(() => {
        yearsstudiedAarhus()
      }, [])

      const migrationAarhus = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Tanska.agg",
                  "values": [
                    "9"
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
          .then((json) => setAarhusmigration(json.dataset.value));
      }
  
      useEffect(() => {
        migrationAarhus()
      }, [])

      const emigrationAarhus = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Tanska.agg",
                  "values": [
                    "9"
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
          .then((json) => setAarhusemigration(json.dataset.value));
      }
  
      useEffect(() => {
        emigrationAarhus()
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
                            <Text style={styles.cityText}>Aarhus</Text>
                                <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                                <View style={styles.cityImageView}>
                                    <Image source={require('../Denmark/images/aarhusyearsstudied.jpg')} 
                                    style={styles.cityImages}
                                />
                                </View>
                                <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{aarhusyearsstudied[0]}</Text>
                                    {"\n"}2019: <Text style={styles.cityData}>{aarhusyearsstudied[1]}</Text>
                                    {"\n"}2020: <Text style={styles.cityData}>{aarhusyearsstudied[2]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{aarhusyearsstudied[3]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{aarhusyearsstudied[4]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Migration</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{aarhusmigration[0]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{aarhusmigration[1]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{aarhusmigration[2]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Emigration</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{aarhusemigration[0]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{aarhusemigration[1]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{aarhusemigration[2]}</Text>
                                </Text>
                    </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Aarhus