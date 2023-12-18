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
    const [stockholmmigration, setStockholmmigration] = useState([]);
    const [stockholmemigration, setStockholmemigration] = useState([]);
    const [stockholmworkforce, setStockholmworkforce] = useState([]);

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

      const migrationStockholm = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
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
          .then((json) => setStockholmmigration(json.dataset.value));
      }
  
      useEffect(() => {
        migrationStockholm()
      }, [])

      const emigrationStockholm = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
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
          .then((json) => setStockholmemigration(json.dataset.value));
      }
  
      useEffect(() => {
        emigrationStockholm()
      }, [])

      const workforceStockholm = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-3NS_Tyollinen_tyovoima.px", {
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
          .then((json) => setStockholmworkforce(json.dataset.value));
      }
  
      useEffect(() => {
        workforceStockholm()
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
                        <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{stockholmworkingage[0]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{stockholmworkingage[1]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{stockholmworkingage[2]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{stockholmworkingage[3]}</Text>
                          {"\n"}2022: <Text style={styles.cityData}>{stockholmworkingage[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Migration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/stockholmmigration.jpg')} 
                              style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{stockholmmigration[0]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{stockholmmigration[1]}</Text>
                          {"\n"}2022: <Text style={styles.cityData}>{stockholmmigration[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Emigration</Text>
                        <View style={styles.cityImageView}>
                          <Image source={require('../Sweden/images/stockholmemigration.jpg')} 
                              style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{stockholmemigration[0]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{stockholmemigration[1]}</Text>
                          {"\n"}2022: <Text style={styles.cityData}>{stockholmemigration[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Work force</Text>
                        <View style={styles.cityImageView}>
                            <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                        </View>
                        <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{stockholmworkforce[0]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{stockholmworkforce[1]}</Text>
                          {"\n"}2022: <Text style={styles.cityData}>{stockholmworkforce[2]}</Text>
                        </Text>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Stockholm