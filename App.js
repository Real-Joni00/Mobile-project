import { View } from 'react-native';
import Home from './screens/Home.js';
import Cities from './screens/Cities.js';
import Quiz from './screens/Quiz.js';
import Login from './screens/Login.js';
import Header from './components/Header.js';
import Register from './screens/ProfileNavigation/Register.js';
import Forgot from './screens/ProfileNavigation/Forgot.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { BlurView } from 'expo-blur';
import styles from './styles/style.js';
import 'react-native-gesture-handler';
import Confirm from './screens/ProfileNavigation/Confirm.js';
import LoggedUser from './screens/ProfileNavigation/LoggedUser.js';

// Importing cities files for stack navigator

// Finland

import Helsinki from './screens/StackNavigationCities/Finland/Helsinki.js';
import Tampere from './screens/StackNavigationCities/Finland/Tampere.js';
import Turku from './screens/StackNavigationCities/Finland/Turku.js';
import Oulu from './screens/StackNavigationCities/Finland/Oulu.js';

// Sweden 

import Stockholm from './screens/StackNavigationCities/Sweden/Stockholm.js';
import Gothenburg from './screens/StackNavigationCities/Sweden/Gothenburg.js';
import Malmö from './screens/StackNavigationCities/Sweden/Malmö.js';

// Norway

import Oslo from './screens/StackNavigationCities/Norway/Oslo.js';
import Bergen from './screens/StackNavigationCities/Norway/Bergen.js';
import Trondheim from './screens/StackNavigationCities/Norway/Trondheim.js';
import Stavanger from './screens/StackNavigationCities/Norway/Stavanger.js';

// Denmark

import Copenhagen from './screens/StackNavigationCities/Denmark/Copenhagen.js';
import Aarhus from './screens/StackNavigationCities/Denmark/Aarhus.js';
import Odense from './screens/StackNavigationCities/Denmark/Odense.js';
import Aalborg from './screens/StackNavigationCities/Denmark/Aalborg.js';

// Iceland

import Reykjavik from './screens/StackNavigationCities/Iceland/Reykjavik.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Akatab': require('./assets/fonts/Akatab-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{}}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cities') {
              iconName = focused ? 'city-variant' : 'city-variant-outline';
            } else if (route.name === 'Quiz') {
              iconName = focused ? 'help-circle' : 'help-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: '#50318f' },
          tabBarActiveTintColor: 'rgb(255, 255, 255)',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Cities' component={StackNavigator} />
        <Tab.Screen name='Quiz' component={Quiz} />
        <Tab.Screen name='Profile' component={StackNavigatorProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Stack navigator to navigate through screens inside screens

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
      headerShown: false,
      presentation: "modal"
      }}>
      <Stack.Screen name='CitiesScreen' component={Cities}/>
      <Stack.Screen name='Helsinki' component={Helsinki}/>
      <Stack.Screen name='Tampere' component={Tampere}/>
      <Stack.Screen name='Turku' component={Turku}/>
      <Stack.Screen name='Oulu' component={Oulu}/>
      <Stack.Screen name='Stockholm' component={Stockholm}/>
      <Stack.Screen name='Gothenburg' component={Gothenburg}/>
      <Stack.Screen name='Malmö' component={Malmö}/>
      <Stack.Screen name='Oslo' component={Oslo}/>
      <Stack.Screen name='Bergen' component={Bergen}/>
      <Stack.Screen name='Trondheim' component={Trondheim}/>
      <Stack.Screen name='Stavanger' component={Stavanger}/>
      <Stack.Screen name='Copenhagen' component={Copenhagen}/>
      <Stack.Screen name='Aarhus' component={Aarhus}/>
      <Stack.Screen name='Odense' component={Odense}/>
      <Stack.Screen name='Aalborg' component={Aalborg}/>
      <Stack.Screen name='Reykjavik' component={Reykjavik}/>
    </Stack.Navigator>
  )
}

function StackNavigatorProfile() {
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Forgot' component={Forgot} />
      <Stack.Screen name='Confirm' component={Confirm} />
      <Stack.Screen name='LoggedUser' component={LoggedUser} />
    </Stack.Navigator>
  )
}