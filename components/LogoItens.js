import React from 'react';
import {Image, Text, View} from 'react-native';

const logoItens = ({item})=> {
  return(
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        margin:10,
        }}>     
    <Image source={item.uri}
       style={{
           width: item.width,
           height: item.height, 
           borderRadius: item.width / 2,
           marginRight: 10,
          }}
      />

    <Text style={{
         color: 'yellow',
         fontSize: 18,
         fontWeight:'bold',
         textAlign: 'left',
         marginBottom:22,
        }}> {item.nome} </Text>
     </View>
  );
};
export default logoItens;