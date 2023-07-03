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
import { Item } from '../components/Item';
import { Box, Flex } from 'native-base';
// SQLite
import Bloco from '../services/database/Bloco';
import { BlocoData } from '../types/PropsData/Propsdata';


type HomeScreenProp = NativeStackNavigationProp<RootStackParamsList, "Home">

export default function Home() {
  const navigation = useNavigation<HomeScreenProp>()
  const [info, setInfo] = useState<BlocoData>([]);

  React.useEffect(() => {
    Bloco.all()
      .then(blocos => setInfo(blocos))
      .catch(err => console.log(err));
  }, [info])

  const Navigation = () => {
    { navigation.navigate('Bloco') }
  }


  const handleDelete = ((id: string) => {
    console.log(id)
    Bloco.remove(id)
    .then( updated => console.log('Cars removed: '+ updated) )
    .catch( err => console.log(err) )
});

const handleEditar= ((id: string) => {
  console.log(id)
  { navigation.navigate('Editar',  {id: id}) }

});
  interface Props {
    id: string;
    Editar: string;
    Apagar: string;

  }

  function BlockRender({ Editar, Apagar, id }: Props) {
    return (
      <>
        <Flex direction="row"
          left={50}
          bottom='23%'
          mb="2.5"
        >
          <TouchableOpacity onPress={() => handleEditar(id)}>
            <Text>{Editar}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(id)}>
            <Text>  {Apagar}</Text>
          </TouchableOpacity>
        </Flex>
      </>
    )
  }

  return (
    <>
      <Box
        flex={1}
        bgColor='white'
      >

        <Header
          title='Home'
          color='black'
          bgColor='indigo.200'
          h='15%'
        />

        {info.map((item: BlocoData) => {
          return (
            <><Item
              title={item.titulo}
              color='black'
              bgColor='white'
              h='15%'
              w='93%' />
              <Box
                alignItems="center"
                left={50}
              >
                <BlockRender
                  Editar='Editar'
                  Apagar='Apagar'
                  id={item.id} />
              </Box>
            </>
          )
        })}
        <Box
          top={5}
          alignItems="center"

        >
          <Button
            title='Novo Bloco'
            color='black'
            bgColor='indigo.200'
            onPress={() => Navigation()}

          />
        </Box>


      </Box>
    </>
  );
}