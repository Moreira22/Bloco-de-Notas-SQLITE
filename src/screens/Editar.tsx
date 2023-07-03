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

type ClientesScreenProp = NativeStackNavigationProp<RootStackParamsList, "Editar">

export default function Editar(props: any) {
  const navigation = useNavigation<ClientesScreenProp>()
  const { control, handleSubmit } = useForm<BlocoData>();
  const [info, setInfo] = useState<BlocoData>([]);
 

  React.useEffect(() => {
    Bloco.find(props.route.params.id)
      .then(blocos => setInfo(blocos))
      .catch(err => console.log(err));
  }, [info])

   function handleSignUp(data: BlocoData) {
    Bloco.update(props.route.params.id , data )
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
          title='Editar'
          color='black'
          bgColor='indigo.200'
          h='15%'
        />
        <Controller
          control={control}
          name="titulo"
          render={({ field: { onChange } }) => (
            <Input placeholder='Titulo'
              onChangeText={onChange}>
                {info.titulo}
              </Input>
          )} />
           <Controller
          control={control}
          name="texto"
          render={({ field: { onChange } }) => (
            <InputText placeholder='Texto'
              onChangeText={onChange}>
                {info.texto}
              </InputText>
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