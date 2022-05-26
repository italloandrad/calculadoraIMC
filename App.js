import React from 'react';
import { StyleSheet,View } from 'react-native';
//Fonte
import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold} 
  from '@expo-google-fonts/montserrat';
import Titulo from './src/components/Titulo';
import Campos from './src/components/Campos';


export default function App() {  
const [ fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
// Condicao Caso a Fonte nao seja Carregada ainda
  if (!fonteCarregada) {
    return <View />
  }
  return(
    <View style={styles.container}>
    <Titulo/>
    <Campos/>
    </View>
  );
}


//CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center',   
  }
});
