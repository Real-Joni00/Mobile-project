import { View, Text, Image, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Helsinki = () => {

  const [helsinginkoulutusvuodet, setHelsinginkoulutusvuodet] = useState([]);
  const [helsingintyöikäiset, setHelsingintyöikäiset] = useState([]);
  const [helsingintyöpaikat, setHelsingintyöpaikat] = useState([]);
  const [helsingintulomuutto, setHelsingintulomuutto] = useState([]);
  const [helsinginlähtömuutto, setHelsinginlähtömuutto] = useState([]);
  const [helsingintyövoima, setHelsingintyövoima] = useState([]);

  const koulutusvuodetHelsinki = () => {
      fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
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
        .then((json) => setHelsinginkoulutusvuodet(json.dataset.value));
    }

    useEffect(() => {
      koulutusvuodetHelsinki()
    }, [])

    const työikäisetHelsinki = () => {
      fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
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
        .then((json) => setHelsingintyöikäiset(json.dataset.value));
    }

    useEffect(() => {
      työikäisetHelsinki()
    }, [])

    const työpaikatHelsinki = () => {
      fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-2aNS_Tyopaikat_TOL2008.px", {
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
              "code": "Toimiala",
              "selection": {
                "filter": "item",
                "values": [
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07"
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
        .then((json) => setHelsingintyöpaikat(json.dataset.value));
    }

    useEffect(() => {
      työpaikatHelsinki()
    }, [])

    const tulomuuttoHelsinki = () => {
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
        .then((json) => setHelsingintulomuutto(json.dataset.value));
    }

    useEffect(() => {
      tulomuuttoHelsinki()
    }, [])

    const lähtömuuttoHelsinki = () => {
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
        .then((json) => setHelsinginlähtömuutto(json.dataset.value));
    }

    useEffect(() => {
      lähtömuuttoHelsinki()
    }, [])

    const työllinentyövoimaHelsinki = () => {
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
        .then((json) => setHelsingintyövoima(json.dataset.value));
    }

    useEffect(() => {
      työllinentyövoimaHelsinki()
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
                  <Text style={styles.cityText}>Helsinki</Text>
                  <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                  <View style={styles.cityImageView}>
                    <Image source={require('../Finland/images/helsinginkoulutusvuodet.jpg')} 
                      style={styles.cityImages}
                    />
                  </View>
                  <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{helsinginkoulutusvuodet[0]}</Text>
                    {"\n"}2018: <Text style={styles.cityData}>{helsinginkoulutusvuodet[1]}</Text>
                    {"\n"}2019: <Text style={styles.cityData}>{helsinginkoulutusvuodet[2]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsinginkoulutusvuodet[3]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsinginkoulutusvuodet[4]}</Text>
                  </Text>
                  <Text style={styles.citypgSubheaders}>Working age population</Text>
                    <View style={styles.cityImageView}>
                        <Image source={require('../Finland/images/helsingintyöikäiset.jpg')} 
                          style={styles.cityImages}
                        />
                    </View>
                  <Text style={styles.cityTexts}>2017: <Text style={styles.cityData}>{helsingintyöikäiset[0]}</Text>
                    {"\n"}2018: <Text style={styles.cityData}>{helsingintyöikäiset[1]}</Text>
                    {"\n"}2019: <Text style={styles.cityData}>{helsingintyöikäiset[2]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyöikäiset[3]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyöikäiset[4]}</Text>
                  </Text>
                  <Text style={styles.citypgSubheaders}>Migration</Text>
                    <View style={styles.cityImageView}>
                        <Image source={require('../Finland/images/helsinkimigration.jpg')} 
                          style={styles.cityImages}
                        />
                    </View>
                  <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{helsingintulomuutto[0]}</Text>
                    {"\n"}2019: <Text style={styles.cityData}>{helsingintulomuutto[1]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintulomuutto[2]}</Text>
                  </Text>
                  <Text style={styles.citypgSubheaders}>Emigration</Text>
                    <View style={styles.cityImageView}>
                        <Image source={require('../Finland/images/helsinkemigration.jpg')} 
                          style={styles.cityImages}
                        />
                    </View>
                  <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{helsinginlähtömuutto[0]}</Text>
                    {"\n"}2019: <Text style={styles.cityData}>{helsinginlähtömuutto[1]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsinginlähtömuutto[2]}</Text>
                  </Text>
                  <Text style={styles.citypgSubheaders}>Work force</Text>
                    <View style={styles.cityImageView}>
                        <Image source={require('../Finland/images/helsinkiworkforce.jpg')} 
                          style={styles.cityImages}
                        />
                    </View>
                  <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{helsingintyövoima[0]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyövoima[1]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyövoima[2]}</Text>
                  </Text>
                  <Text style={styles.citypgSubheaders}>Jobs available based on industry</Text>
                  <View style={styles.cityImageView}>
                    <Text style={styles.citypgSubheaders}>{"\n"}Kuva tähän</Text>
                  </View>
                  <Text style={styles.cityTexts}>{"\n"}Manufacturing and construction</Text>
                  <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{helsingintyöpaikat[0]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyöpaikat[1]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyöpaikat[2]}</Text>
                  </Text>
                  <Text style={styles.cityTexts}>{"\n"}Commerce, transportation and accommodation</Text>
                  <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{helsingintyöpaikat[3]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyöpaikat[4]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyöpaikat[5]}</Text>
                  </Text>
                  <Text style={styles.cityTexts}>{"\n"}Information and communication</Text>
                  <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{helsingintyöpaikat[6]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyöpaikat[7]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyöpaikat[8]}</Text>
                  </Text>
                  <Text style={styles.cityTexts}>{"\n"}Finance, real estate and support services</Text>
                  <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{helsingintyöpaikat[9]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyöpaikat[10]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyöpaikat[11]}</Text>
                  </Text>
                  <Text style={styles.cityTexts}>{"\n"}Public administration, education, healthcare and social welfare</Text>
                  <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{helsingintyöpaikat[12]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyöpaikat[13]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyöpaikat[14]}</Text>
                  </Text>
                  <Text style={styles.cityTexts}>{"\n"}Arts and other services</Text>
                  <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{helsingintyöpaikat[15]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyöpaikat[16]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyöpaikat[17]}</Text>
                  </Text>
                  <Text style={styles.cityTexts}>{"\n"}Unknown</Text>
                  <Text style={styles.cityTexts}>2019: <Text style={styles.cityData}>{helsingintyöpaikat[18]}</Text>
                    {"\n"}2020: <Text style={styles.cityData}>{helsingintyöpaikat[19]}</Text>
                    {"\n"}2021: <Text style={styles.cityData}>{helsingintyöpaikat[20]}</Text>
                  </Text>
            </ScrollView>
        </LinearGradient>
      </>
    )
}

export default Helsinki