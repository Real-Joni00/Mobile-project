import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Trondheim = () => {

    const [trondheimyearsstudied, setTrondheimyearsstudied] = useState([]);
    const [trondheimworkingage, setTrondheimworkingage] = useState([]);
    const [trondheimmigration, setTrondheimmigration] = useState([]);
    const [trondheimemigration, setTrondheimemigration] = useState([]);

    const yearsstudiedTrondheim = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Norja.agg",
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
          .then((json) => setTrondheimyearsstudied(json.dataset.value));
      }
  
      useEffect(() => {
        yearsstudiedTrondheim()
      }, [])

      const workingageTrondheim = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Norja.agg",
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
          .then((json) => setTrondheimworkingage(json.dataset.value));
      }
  
      useEffect(() => {
        workingageTrondheim()
      }, [])

      const migrationTrondheim = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Norja.agg",
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
          .then((json) => setTrondheimmigration(json.dataset.value));
      }
  
      useEffect(() => {
        migrationTrondheim()
      }, [])

      const emigrationTrondheim = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Norja.agg",
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
          .then((json) => setTrondheimemigration(json.dataset.value));
      }
  
      useEffect(() => {
        emigrationTrondheim()
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
                            <Text style={styles.cityText}>Trondheim</Text>
                                <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                                <View style={styles.cityImageView}>
                                    <Image source={require('../Norway/images/trondheimyearsstudied.jpg')} 
                                    style={styles.cityImages}
                                />
                                </View>
                                <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{trondheimyearsstudied[0]}</Text>
                                    {"\n"}2019: <Text style={styles.cityData}>{trondheimyearsstudied[1]}</Text>
                                    {"\n"}2020: <Text style={styles.cityData}>{trondheimyearsstudied[2]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{trondheimyearsstudied[3]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{trondheimyearsstudied[4]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Working age population</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{trondheimworkingage[0]}</Text>
                                    {"\n"}2019: <Text style={styles.cityData}>{trondheimworkingage[1]}</Text>
                                    {"\n"}2020: <Text style={styles.cityData}>{trondheimworkingage[2]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{trondheimworkingage[3]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{trondheimworkingage[4]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Migration</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{trondheimmigration[0]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{trondheimmigration[1]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{trondheimmigration[2]}</Text>
                                </Text>
                                <Text style={styles.citypgSubheaders}>Emigration</Text>
                                    <View style={styles.cityImageView}>
                                        <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                                    </View>
                                <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{trondheimemigration[0]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{trondheimemigration[1]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{trondheimemigration[2]}</Text>
                                </Text>
                    </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Trondheim