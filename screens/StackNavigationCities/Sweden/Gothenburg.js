import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Gothenburg = () => {

    const [gothenburgyearsstudied, setGothenburgyearsstudied] = useState([]);
    const [gothenburgworkingage, setGothenburgworkingage] = useState([]);
    const [gothenburgmigration, setGothenburgmigration] = useState([]);
    const [gothenburgemigration, setGothenburgemigration] = useState([]);
    const [gothenburgworkforce, setGothenburgworkforce] = useState([]);

    const yearsstudiedGothenburg = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Ruotsi.agg",
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
          .then((json) => setGothenburgyearsstudied(json.dataset.value));
      }
  
      useEffect(() => {
        yearsstudiedGothenburg()
      }, [])

      const workingageGothenburg = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Ruotsi.agg",
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
          .then((json) => setGothenburgworkingage(json.dataset.value));
      }
  
      useEffect(() => {
        workingageGothenburg()
      }, [])

      const migrationGothenburg = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Ruotsi.agg",
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
          .then((json) => setGothenburgmigration(json.dataset.value));
      }
  
      useEffect(() => {
        migrationGothenburg()
      }, [])

      const emigrationGothenburg = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/3_Vaestonmuutokset/3-1NS_Vaestonmuutokset.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Ruotsi.agg",
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
          .then((json) => setGothenburgemigration(json.dataset.value));
      }
  
      useEffect(() => {
        emigrationGothenburg()
      }, [])

      const workforceGothenburg = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-3NS_Tyollinen_tyovoima.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "item",
                  "values": [
                    "512"
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
          .then((json) => setGothenburgworkforce(json.dataset.value));
      }
  
      useEffect(() => {
        workforceGothenburg()
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
                        <Text style={styles.cityText}>Gothenburg</Text>
                        <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/gothenburgyearsstudied.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{gothenburgyearsstudied[0]}</Text>
                        {"\n"}2019: <Text style={styles.cityData}>{gothenburgyearsstudied[1]}</Text>
                        {"\n"}2020: <Text style={styles.cityData}>{gothenburgyearsstudied[2]}</Text>
                        {"\n"}2021: <Text style={styles.cityData}>{gothenburgyearsstudied[3]}</Text>
                        {"\n"}2022: <Text style={styles.cityData}>{gothenburgyearsstudied[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Working age population</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/gothenburgworkingagepopulation.jpg')} 
                                style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{gothenburgworkingage[0]}</Text>
                          {"\n"}2018: <Text style={styles.cityData}>{gothenburgworkingage[1]}</Text>
                          {"\n"}2019: <Text style={styles.cityData}>{gothenburgworkingage[2]}</Text>
                          {"\n"}2020: <Text style={styles.cityData}>{gothenburgworkingage[3]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{gothenburgworkingage[4]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Migration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/gothenburgmigration.jpg')} 
                              style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{gothenburgmigration[0]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{gothenburgmigration[1]}</Text>
                          {"\n"}2022: <Text style={styles.cityData}>{gothenburgmigration[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Emigration</Text>
                        <View style={styles.cityImageView}>
                            <Image source={require('../Sweden/images/gothenburgemigration.jpg')} 
                              style={styles.cityImages}
                            />
                        </View>
                        <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{gothenburgemigration[0]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{gothenburgemigration[1]}</Text>
                          {"\n"}2022: <Text style={styles.cityData}>{gothenburgemigration[2]}</Text>
                        </Text>
                        <Text style={styles.citypgSubheaders}>Work force</Text>
                        <View style={styles.cityImageView}>
                            <Text style={styles.citypgSubheaders}>Kuva tähän</Text>
                        </View>
                        <Text style={styles.cityTexts}>2020: <Text style={styles.cityData}>{gothenburgworkforce[0]}</Text>
                          {"\n"}2021: <Text style={styles.cityData}>{gothenburgworkforce[1]}</Text>
                          {"\n"}2022: <Text style={styles.cityData}>{gothenburgworkforce[2]}</Text>
                        </Text>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Gothenburg