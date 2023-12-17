import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Oulu = () => {

    const [oulunkoulutusvuodet, setOulunkoulutusvuodet] = useState([]);
    const [ouluntyöikäiset, setOuluntyöikäiset] = useState([]);
    const [ouluntulomuutto, setOuluntulomuutto] = useState([]);
    const [oulunlähtömuutto, setOulunlähtömuutto] = useState([]);
    const [ouluntyövoima, setOuluntyövoima] = useState([]);

    const koulutusvuodetOulu = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
                  "values": [
                    "7"
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
          .then((json) => setOulunkoulutusvuodet(json.dataset.value));
      }

      useEffect(() => {
        koulutusvuodetOulu()
      }, [])

      const työikäisetOulu = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
                  "values": [
                    "7"
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
          .then((json) => setOuluntyöikäiset(json.dataset.value));
      }

      useEffect(() => {
        työikäisetOulu()
      }, [])

      const tulomuuttoOulu = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
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
          .then((json) => setOuluntulomuutto(json.dataset.value));
      }

      useEffect(() => {
        tulomuuttoOulu()
      }, [])

      const lähtömuuttoOulu = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Suomi.agg",
                  "values": [
                    "7"
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
          .then((json) => setOulunlähtömuutto(json.dataset.value));
      }

      useEffect(() => {
        lähtömuuttoOulu()
      }, [])

      const työvoimaOulu = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-3NS_Tyollinen_tyovoima.px", {
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
          .then((json) => setOuluntyövoima(json.dataset.value));
      }

      useEffect(() => {
        työvoimaOulu()
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
                        <Text style={styles.cityText}>Oulu</Text>
                        <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/oulukoulutusvuodet.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{oulunkoulutusvuodet[0]}</Text>
                        {"\n"}2018: <Text style={styles.cityData}>{oulunkoulutusvuodet[1]}</Text>
                        {"\n"}2019: <Text style={styles.cityData}>{oulunkoulutusvuodet[2]}</Text>
                        {"\n"}2020: <Text style={styles.cityData}>{oulunkoulutusvuodet[3]}</Text>
                        {"\n"}2021: <Text style={styles.cityData}>{oulunkoulutusvuodet[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Working age population</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/ouluntyöikäiset.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{ouluntyöikäiset[0]}</Text>
                        {"\n"}2018: <Text style={styles.cityData}>{ouluntyöikäiset[1]}</Text>
                        {"\n"}2019: <Text style={styles.cityData}>{ouluntyöikäiset[2]}</Text>
                        {"\n"}2020: <Text style={styles.cityData}>{ouluntyöikäiset[3]}</Text>
                        {"\n"}2021: <Text style={styles.cityData}>{ouluntyöikäiset[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Migration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/oulumigration.jpg')} 
                              style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{ouluntulomuutto[0]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{ouluntulomuutto[1]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{ouluntulomuutto[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Emigration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/ouluemigration.jpg')} 
                              style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{oulunlähtömuutto[0]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{oulunlähtömuutto[1]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{oulunlähtömuutto[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Work force</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Finland/images/ouluworkforce.jpg')} 
                              style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{ouluntyövoima[0]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{ouluntyövoima[1]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{ouluntyövoima[2]}</Text>
                        </Text>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Oulu