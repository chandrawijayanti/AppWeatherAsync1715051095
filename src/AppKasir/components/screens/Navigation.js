import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Menu from './Menu';
import Kasir from './Kasir';
import Tentang from './tentang';
import DataBarang from "./DataBarang";
//import Siak from "./Siak";


const AppNavigator = createStackNavigator(
  {
    Menu: Menu,
    Barang: DataBarang,
    Kasir: Kasir,
    Tentang: Tentang,
    //Siak: Siak,

  },
  {
      initialRouteName: "Menu"
  }
);

export default createAppContainer(AppNavigator);
