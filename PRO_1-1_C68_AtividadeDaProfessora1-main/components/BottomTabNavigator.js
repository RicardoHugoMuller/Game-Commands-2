import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from "../screens/home";
import AvaliacaoScreen from "../screens/avaliacao";
import ChatScreen from "../screens/chat";
import CodigosScreen from "../screens/codigos";
import RecomendacoesScreen from "../screens/recomendacoes";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Avaliação" component={AvaliacaoScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Codigos" component={CodigosScreen} />
            <Tab.Screen name="Recomendações" component={RecomendacoesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
