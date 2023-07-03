import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text 
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
// Navigation
import { RootStackParamsList } from '../routes/stack.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// native base 
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { InputText } from '../components/InputText';
import { Box, Flex } from 'native-base';
// SQLite
import Bloco from '../services/database/Bloco';
import { BlocoData } from '../types/PropsData/Propsdata';
// Hook Form
import { useForm, Controller } from 'react-hook-form'

type ClientesScreenProp = NativeStackNavigationProp<RootStackParamsList, "Bloco">

export default function Blocos() {
  const navigation = useNavigation<ClientesScreenProp>()
  const { control, handleSubmit } = useForm<BlocoData>();

  function handleSignUp(data: BlocoData) {
    console.log(data)
    Bloco.create(data )
      .then(id => console.log('Bloco created with id: ' + id))
      .catch(err => console.log(err))
      { navigation.navigate('Home') }
  }
  return (
    <>
      <Box
        flex={1}
        bgColor='white'
      >
        <Header
          title='Bloco'
          color='black'
          bgColor='indigo.200'
          h='15%'
        />
        <Controller
          control={control}
          name="titulo"
          render={({ field: { onChange } }) => (
            <Input placeholder='Titulo'
              onChangeText={onChange} />
          )} />
           <Controller
          control={control}
          name="texto"
          render={({ field: { onChange } }) => (
            <InputText placeholder='Texto'
              onChangeText={onChange} />
          )} />

        <Box
          top={5}
          alignItems="center"

        >
          <Button
            title='Salvar'
            color='black'
            bgColor='indigo.200'
            onPress={handleSubmit(handleSignUp)}
          />
        </Box>


      </Box>
    </>
  );
}