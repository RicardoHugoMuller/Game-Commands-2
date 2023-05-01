import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import firebase from "firebase";

export default class AvaliacaoScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      starwhite:true,
      stars:0,
    }
  }
  fivestars=()=>{
  if(this.state.stars > 5){
    firebase
    .database()
    .ref("avaliação")
    .child("stars")
    .child("star")
    .set(firebase.database.ServerValue.increment(-5));
  }
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Avaliação</Text>
        <TouchableOpacity onPress={()=> this.fivestars()}>
        <Ionicons
        name={"star"}
        size={RFValue(15)}
        color={this.state.starwhite?"white":"yellow"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.fivestars()}>
        <Ionicons
        name={"star"}
        size={RFValue(15)}
        color={this.state.starwhite?"white":"yellow"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.fivestars()}>
        <Ionicons
        name={"star"}
        size={RFValue(15)}
        color={this.state.starwhite?"white":"yellow"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.fivestars()}>
        <Ionicons
        name={"star"}
        size={RFValue(15)}
        color={this.state.starwhite?"white":"yellow"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.fivestars()}>
        <Ionicons
        name={"star"}
        size={RFValue(15)}
        color={this.state.starwhite?"white":"yellow"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.fivestars()}>
        <Ionicons
        name={"star"}
        size={RFValue(15)}
        color={this.state.starwhite?"white":"yellow"}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
