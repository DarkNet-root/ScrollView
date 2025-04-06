import React from 'react';
import { TextInput } from 'react-native';

const pesquisa = ()=> {
  return(
    
    <TextInput style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:10,
        marginBottom:10,
        borderRadius: 20,
        paddingLeft: 5,
        color: 'white',
        backgroundColor:'#000c0c2',
       
      }}
      placeholder="Pergunte à Meta AI ou pesquise"
      placeholderTextColor="gray"
    />
  );
};

export default pesquisa;