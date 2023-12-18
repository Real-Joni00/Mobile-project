import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Copenhagen = () => {

    const [copenhagenyearsstudied, setCopenhagenyearsstudied] = useState([]);
    const [copenhagenworkingage, setCopenhagenworkingage] = useState([]);
    const [copenhagenmigration, setCopenhagenmigration] = useState([]);
    const [copenhagenemigration, setCopenhagenemigration] = useState([]);

    const yearsstudiedCopenhagen = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Tanska.agg",
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
          .then((json) => setCopenhagenyearsstudied(json.dataset.value));
      }
  
      useEffect(() => {
        yearsstudiedCopenhagen()
      }, [])

      const migrationCopenhagen = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Tanska.agg",
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
          .then((json) => setCopenhagenmigration(json.dataset.value));
      }
  
      useEffect(() => {
        migrationCopenhagen()
      }, [])

      const emigrationCopenhagen = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Tanska.agg",
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
          .then((json) => setCopenhagenemigration(json.dataset.value));
      }
  
      useEffect(() => {
        emigrationCopenhagen()
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
                            <Text style={styles.cityText}>Copenhagen</Text>
                                <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                                <View style={styles.cityImageView}>
                                    <Image source={require('../Denmark/images/copenhagenyearsstudied.jpg')} 
                                    style={styles.cityImages}
                                />
                                </View>
                                <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{copenhagenyearsstudied[0]}</Text>
                                    {"\n"}2019: <Text style={styles.cityData}>{copenhagenyearsstudied[1]}</Text>
                                    {"\n"}2020: <Text style={styles.cityData}>{copenhagenyearsstudied[2]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{copenhagenyearsstudied[3]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{copenhagenyearsstudied[4]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Migration</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{copenhagenmigration[0]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{copenhagenmigration[1]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{copenhagenmigration[2]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Emigration</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{copenhagenemigration[0]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{copenhagenemigration[1]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{copenhagenemigration[2]}</Text>
                                </Text>
                    </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Copenhagen