import React from "react";
import { Buttom, StyleSheet, Text, View } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";

 
const Drawer = createDrawerNavigator();
function Inicial({navigation}){
  return(
    <View style={styles.container}>
      <Text> Tela inicial </Text>
      <Buttom title="Fazer pedido"
       onPress={() => navigation.navigate("Tela de pedido")}/>
    </View>
  );
}

function pedido(navigation){
  return(
    <View >
      <Text> Tela de pedido </Text>
      <Buttom title="Voltar para tela inicial" 
      onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName= "Tela inicial ">
          screenOptions={{
            DrawerStyle: {
              backgroundColor: "#2d0b57",
              width: "60%",
            },
            DrawerActiveTintColor: "#ff83e0",
            DrawerActiveBackgroundColor: "#c2c2c2",
            DrawerInactiveTintColor: "#000000",

            }}
    <Drawer.Screen 
      name="Tela inicial" component={Inicial} options={{
        drawerLabel:"Página no começo",
        headerShown: true,
        drawerIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color}/>
        ),
      }} />
      <Drawer.Screen 
      name="Pedido" component={pedido} options={{
        drawerIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color}/>
        ),
      }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); 