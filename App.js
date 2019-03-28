import React from 'react';
import VolumeBalok from './src/00Persiapan/VolumeBalok';
import VolumeKelilingBalok from './src/00Persiapan/VolumeKelilingBalok';
import HelloWorld from './src/00Persiapan/HelloWorld';
import BelajarLayout from './src/01Layout/BelajarLayout';
import Layout from './src/01Layout/Layout';
import DaftarMahasiswa from './src/02Komponen/DaftarMahasiswa';
//import Menu from './src/02Komponen/Navigator/Menu';
import Main from './src/02Komponen/Navigator/Main';
import Menu from './src/AppKasir/components/Menu';
import Siak from './src/02Komponen/Siak';
import Cuaca1 from './src/04API/Cuaca1';
import Cuaca2 from './src/04API/Cuaca2';
export default class App extends React.Component{
  render (){
    return (
      <Cuaca2/>
      );
  }
}
