import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import Btn from './components/Btn';
import { global } from './styles/Global';
import React,{useState} from 'react';
import * as Font from 'expo-font';
export default function App() {
  const [numbers,setNumbers] = useState([
    7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'.','=','/'
  ])
  const [res,setRes] = useState('')
  const [cal,setCal] = useState([])
  const [bool1,setBool1] = useState(false)
  const [bool2,setBool2] = useState(false)
  const getFonts = Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/NunitoSans_10pt-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/NunitoSans_10pt-SemiBold.ttf')
  })
  async function loadFont () {
    await Promise.all([getFonts])
    return true;
    };

  function calc(array){
    switch(array[1]){
      case '+' :
        setRes(Number(array[0]) + Number(array[2]))
        break;
      case '-' : 
        setRes(Number(array[0]) - Number(array[2]))  
        break;
      case '*' : 
        setRes(Number(array[0]) * Number(array[2]))
        break;
      case '/' : 
      try{
        let result = (Number(array[0])/Number(array[2]))
        setRes((result))
        }catch(e){
          console.log(e)
        }
        break 
        default:
        break;

    }
  }
  
  function handleRes(param){
    if(typeof param === 'number' || param === '.'){
      setRes(prevValue => prevValue + '' + param);
    }else{
      if(param === "+" || param === "-" || param === "*" || param === "/" && res !== ''){
        setBool1(true)
        cal.push(res)
        cal.push(param)
        console.log(cal)
      }else{
        cal.push(res)
        console.log(cal)
        calc(cal)
        setCal([])
      }
    } 
    }
  function handleRes1(param){
    setRes('')
    setRes(prevValue => prevValue +''+param)
    setBool1(false)
  }
  function clear(){
    setCal([])
    setRes('');
    console.log(cal)
  }
 
  return (
    <View id='calculatorContainer' style={global.container}>
      <ScrollView>
        <View id='result'>
          <Text style={global.result}>{res}</Text>
        </View>
        </ScrollView>
        <View id='other' style = {{flexDirection : 'row',gap : 10,marginBottom : 10,}}>
        <TouchableOpacity onPress={()=> setRes(prevValue => prevValue.substring(0,prevValue.length-1))}><Btn number={<Feather name="delete" size={34} color="black" />}/></TouchableOpacity>
        <TouchableOpacity onPress={clear}><Btn number={'AC'}/></TouchableOpacity>
        </View>
      <View id='calculatorButtons' style = {global.containerButtons} >
        {numbers.map(item => {
          return <TouchableOpacity onPress={()=> !bool1 ? handleRes(item) : handleRes1(item)} key={item}><Btn number={item}/></TouchableOpacity>
        })}
        <StatusBar style="auto" />
      </View> 
    </View>
    
  );
}
