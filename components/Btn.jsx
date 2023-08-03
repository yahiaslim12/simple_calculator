import { View, Text } from 'react-native'
import React from 'react'
import { global } from '../styles/Global'
import { Feather } from '@expo/vector-icons'; 

export default function Btn({number}) {
  return (
    <View style={typeof number === 'number' ? global.button : (
        number === '=' ? global.equal : (
            number === 'AC' || number === <Feather/> ? global.other : global.operator
        )
    )}>
      <Text style = {global.text}>{number}</Text>
    </View>
  )
}