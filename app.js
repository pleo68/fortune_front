import { ActivityIndicator, StatusBar, ScrollView, View, Text, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer, Button } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Openscreen from './screens/Openscreen';
import Todayscreen from './screens/Todayscreen';
import Taroscreen from './screens/Taroscreen';
import Sajuscreen from './screens/Sajuscreen';
import Profilescreen from './screens/Profilescreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="오늘의 운세" component={Todayscreen} />
      <Tab.Screen name="타로" component={Taroscreen} />
      <Tab.Screen name="사주" component={Sajuscreen} />
      <Tab.Screen name="나" component={Profilescreen} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle="white-content"/>
      <Stack.Navigator initialRouteName="Open" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Open" component={Openscreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
