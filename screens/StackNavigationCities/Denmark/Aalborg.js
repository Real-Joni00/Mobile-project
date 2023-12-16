import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Aalborg = () => {

    const [aalborgyearsstudied, setAalborgyearsstudied] = useState([]);

    const yearsstudiedStockholm = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "agg:Tanska.agg",
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
          .then((json) => setAalborgyearsstudied(json.dataset.value));
      }
  
      useEffect(() => {
        yearsstudiedAalborg()
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
                            <Text style={styles.cityText}>Aalborg</Text>
                                <Text style={styles.citypgSubheaders}>Residents with over 13 years of studies</Text>
                                <View style={styles.cityImageView}>
                                    <Image source={require('../Denmark/images/aalborgyearsstudied.jpg')} 
                                    style={styles.cityImages}
                                />
                                </View>
                                <Text style={styles.cityTexts}>2018: <Text style={styles.cityData}>{aalborgyearsstudied[0]}</Text>
                                    {"\n"}2019: <Text style={styles.cityData}>{aalborgyearsstudied[1]}</Text>
                                    {"\n"}2020: <Text style={styles.cityData}>{aalborgyearsstudied[2]}</Text>
                                    {"\n"}2021: <Text style={styles.cityData}>{aalborgyearsstudied[3]}</Text>
                                    {"\n"}2022: <Text style={styles.cityData}>{aalborgyearsstudied[4]}</Text>
                                </Text>
                    </ScrollView>
            </LinearGradient>
        </>
    )
}

export default Aalborg