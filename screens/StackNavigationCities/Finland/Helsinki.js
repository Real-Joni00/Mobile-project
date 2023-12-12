import { View, Text, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import styles from '../../../styles/style';

const Helsinki = () => {

    const [vaestotiheys, setVaestotiheys] = useState([]);

    const vaestotiheydet = () => {
        fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/1_Alue/1-2_Pinta-ala_ja_vaestontiheys.px", {
          method: "POST",
          body: JSON.stringify({
            "query": [
              {
                "code": "Alue",
                "selection": {
                  "filter": "item",
                  "values": [
                    "202"
                  ]
                }
              },
              {
                "code": "Tieto",
                "selection": {
                  "filter": "item",
                  "values": [
                    "10"
                  ]
                }
              },
              {
                "code": "Vuosi",
                "selection": {
                  "filter": "item",
                  "values": [
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
          .then((json) => setVaestotiheys(json.dataset.value));
      }

      useEffect(() => {
        vaestotiheydet()
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
          <>
              <Header/>
                  <Text>Helsinki</Text>
                  <View style={styles.cityImageView}>
                    <Image source={require('../Finland/images/helsinginkoulutusvuodet.jpg')} 
                      style={styles.cityImages}
                    />
                  </View>
                  <Text>{vaestotiheys}</Text>
            </>
        </LinearGradient>
      </>
    )
}

export default Helsinki