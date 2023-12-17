import { View, Text, Image, ScrollView } from 'react-native'
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
    const [tampereentulomuutto, setTampereentulomuutto] = useState([]);
    const [tampereenlähtömuutto, setTampereenlähtömuutto] = useState([]);
    const [tamperetyövoima, setTamperetyövoima] = useState([]);

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

      const tulomuuttoTampere = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
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
          .then((json) => setTampereentulomuutto(json.dataset.value));
      }

      useEffect(() => {
        tulomuuttoTampere()
      }, [])

      const lähtömuuttoTampere = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
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
          .then((json) => setTampereenlähtömuutto(json.dataset.value));
      }

      useEffect(() => {
        lähtömuuttoTampere()
      }, [])

      const työvoimaTampere = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-3NS_Tyollinen_tyovoima.px", {
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
          .then((json) => setTamperetyövoima(json.dataset.value));
      }

      useEffect(() => {
        työvoimaTampere()
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
                        <Text style={styles.cityText}>Tampere</Text>
                        <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/tamperekoulutusvuodet.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{tampereenkoulutusvuodet[0]}</Text>
                        {"\n"}2018: <Text style={styles.cityData}>{tampereenkoulutusvuodet[1]}</Text>
                        {"\n"}2019: <Text style={styles.cityData}>{tampereenkoulutusvuodet[2]}</Text>
                        {"\n"}2020: <Text style={styles.cityData}>{tampereenkoulutusvuodet[3]}</Text>
                        {"\n"}2021: <Text style={styles.cityData}>{tampereenkoulutusvuodet[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Working age population</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/tampereentyöikäiset.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{tampereentyöikäiset[0]}</Text>
                        {"\n"}2018: <Text style={styles.cityData}>{tampereentyöikäiset[1]}</Text>
                        {"\n"}2019: <Text style={styles.cityData}>{tampereentyöikäiset[2]}</Text>
                        {"\n"}2020: <Text style={styles.cityData}>{tampereentyöikäiset[3]}</Text>
                        {"\n"}2021: <Text style={styles.cityData}>{tampereentyöikäiset[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Migration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/tamperemigration.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{tampereentulomuutto[0]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{tampereentulomuutto[1]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{tampereentulomuutto[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Emigration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/tampereemigration.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{tampereenlähtömuutto[0]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{tampereenlähtömuutto[1]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{tampereenlähtömuutto[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Work force</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/tampereworkforce.jpg')}
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{tamperetyövoima[0]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{tamperetyövoima[1]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{tamperetyövoima[2]}</Text>
                        </Text>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Tampere