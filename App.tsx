import React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "./src/routes";


export default function App() {
  return (
    <>
      
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
    
    </>
  );
}


