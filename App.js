import React from 'react';
import { ScrollView, Text } from 'react-native';
// import logo from './components/logo'; // Se você precisar importar algo, é só descomentar
import LogoItens from './components/LogoItens';
import Pesquisa from './components/Pesquisa';

const App = () => {
  // Defina o array logo fora do JSX
  const logo = [
    { uri: require('../assets/batman.jpeg'), width: 64, height: 64, nome: 'Batman' },
    { uri: require('../assets/mulher.jpeg'), width: 64, height: 64, nome: 'Mulher Maravilha' },
    { uri: require('../assets/capitao_atomo.jpeg'), width: 64, height: 64, nome: 'Capitão Átomo' },
    { uri: require('../assets/Arlequina.jpeg'), width: 64, height: 64, nome: 'Arlequina' },
    { uri: require('../assets/const.jpeg'), width: 64, height: 64, nome: 'Constantine' },
    { uri: require('../assets/mulher_gaviao.jpeg'), width: 64, height: 64, nome: 'Mulher Gavião' },
    { uri: require('../assets/era.jpeg'), width: 64, height: 64, nome: 'Era Venenosa' },
    { uri: require('../assets/Superman.jpeg'), width: 64, height: 64, nome: 'Superman' },
    { uri: require('../assets/lanterna.jpeg'), width: 64, height: 64, nome: 'Lanterna Verde' },
    { uri: require('../assets/Waly_west.jpeg'), width: 64, height: 64, nome: 'Flash' },
    { uri: require('../assets/zatana.jpeg'), width: 64, height: 64, nome: 'Zatana' },
    { uri: require('../assets/ravena.jpeg'), width: 64, height: 64, nome: 'Ravenna' },
    { uri: require('../assets/zoom.jpeg'), width: 64, height: 64, nome: 'Professor Zoom' },
    { uri: require('../assets/asa-noturna.jpeg'), width: 64, height: 64, nome: 'Asa Noturna' },
    { uri: require('../assets/Supergirl.jpg'), width: 64, height: 64, nome: 'Supergirl' }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      {/* Coloca um texto "WhatsApp" e define a cor dele como branco */}
      <Text style={{ fontSize: 20, color: 'white' }}>WhatsApp</Text>

      {/* Chama o componente Pesquisa */}
      <Pesquisa />

      {/* Mapeia o array logo e renderiza os itens usando o componente LogoItens */}
      {logo.map((item, index) => (
        <LogoItens key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default App;


        
        
      