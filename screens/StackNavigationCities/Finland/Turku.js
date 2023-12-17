import { View, Text, Image, ScrollView } from 'react-native'
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
    const [turuntulomuutto, setTuruntulomuutto] = useState([]);
    const [turunlähtömuutto, setTurunlähtömuutto] = useState([]);
    const [turuntyövoima, setTuruntyövoima] = useState([]);

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

      const tulomuuttoTurku = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
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
                    "2018",
                    "2019",
                    "2020"
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
          .then((json) => setTuruntulomuutto(json.dataset.value));
      }

      useEffect(() => {
        tulomuuttoTurku()
      }, [])

      const lähtömuuttoTurku = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
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
                    "2018",
                    "2019",
                    "2020"
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
          .then((json) => setTurunlähtömuutto(json.dataset.value));
      }

      useEffect(() => {
        lähtömuuttoTurku()
      }, [])

      const työvoimaTurku = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-3NS_Tyollinen_tyovoima.px", {
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
          .then((json) => setTuruntyövoima(json.dataset.value));
      }

      useEffect(() => {
        työvoimaTurku()
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
                        <Text style={styles.cityText}>Turku</Text>
                        <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/turkukoulutusvuodet.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{turunkoulutusvuodet[0]}</Text>
                          {"\n"}2018: <Text style={styles.cityData}>{turunkoulutusvuodet[1]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{turunkoulutusvuodet[2]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{turunkoulutusvuodet[3]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{turunkoulutusvuodet[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Working age population</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/turuntyöikäiset.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{turuntyöikäiset[0]}</Text>
                          {"\n"}2018: <Text style={styles.cityData}>{turuntyöikäiset[1]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{turuntyöikäiset[2]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{turuntyöikäiset[3]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{turuntyöikäiset[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Migration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/turkumigration.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{turuntulomuutto[0]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{turuntulomuutto[1]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{turuntulomuutto[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Emigration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/turkuemigration.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{turunlähtömuutto[0]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{turunlähtömuutto[1]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{turunlähtömuutto[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Work force</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/turkuworkforce.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{turuntyövoima[0]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{turuntyövoima[1]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{turuntyövoima[2]}</Text>
                        </Text>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Turku