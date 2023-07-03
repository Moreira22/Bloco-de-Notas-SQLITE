import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import telas para rotas 
import Home  from '../screens/Home';
import Bloco from '../screens/Bloco';
import Editar from '../screens/Editar';

const { Screen, Navigator } = createNativeStackNavigator();

// passa Params
export type RootStackParamsList = {
    Home:  undefined,
    Bloco: undefined,
    Editar:{id: string},
}


export function StackRoutes() {
    return (
        // passa a navegação 
   
        <Navigator
            initialRouteName='Home' // define qual a tela que será iniciada primeiro.
            screenOptions={{ headerShown: false }} // tira aquele header padrão do android.
        >
            <Screen name='Home' component={Home} />
            <Screen name='Bloco' component={Bloco}/>
            <Screen name='Editar' component={Editar}/>
        </Navigator>
    )
}
