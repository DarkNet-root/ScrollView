import React from 'react';
import {ScrollView, Text} from 'react-native';
import logo from './components/logo';
import LogoItens from './components/LogoItens';
import Pesquisa from './components/Pesquisa';



const App = () => (
<ScrollView style={{ flex: 1, backgroundColor:'black'}}>

 {/* Aqui eu coloco um texto "WhatsApp" e defino a cor dele em destaque como branco*/}
 <Text style={{ fontSize: 20 , color:'white' }}>WhatsApp</Text>

<Pesquisa/>

 {logo.map((item, index) => (  
      <LogoItens key={index} item={item} />
    ))}
  </ScrollView>
  
);

export default App;

        
        
      