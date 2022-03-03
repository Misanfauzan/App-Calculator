import React, { useState } from "react";
// import React from "react";

import { StatusBar } from 'expo-status-bar';
import { 
  NativeBaseProvider, 
  Text, 
  Box,
  VStack,
  Input,
  FormControl,
  HStack,
  Button,
  Center
} from 'native-base';

export default function App() {
  const [number1, onChangeNumber1] = useState(0);
  const [number2, onChangeNumber2] = useState(0);
  let [result, setresult] = useState();  

  function addNum() {
    let result1 = Number(number1) + Number(number2);
    setresult(result1);
  }

  function minNum() {
    let result1 = Number(number1) - Number(number2);
    setresult(result1);
  }

  function multiNum() {
    let result1 = Number(number1) * Number(number2);
    setresult(result1);
  }

  function disNum() {
    let result1 = Number(number1) / Number(number2);
    setresult(result1);
  }

  function perNum() {    
    let result1 = Number(number1) / 100 * Number(number2);
    setresult(result1);
  }

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#FFA0A0" justifyContent="center">
        <VStack alignItems="center" pl={60} pr={60}> 
          <FormControl mb={5}>
            <FormControl.Label>Value A</FormControl.Label>         
            <Input keyboardType="numeric" onChangeText={onChangeNumber1}  alignItems="center" borderRadius={10} bg="#fff"/>         
          </FormControl>
          <FormControl>
            <FormControl.Label>Value B</FormControl.Label>         
            <Input keyboardType="numeric" onChangeText={onChangeNumber2} alignItems="center" borderRadius={10} bg="#fff"/>         
          </FormControl>        
        </VStack>
        <HStack space={3} justifyContent="center" pt={30}>        
          <Button onPress={() => addNum()} h="60px" w="60px"  _text={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} bg="#FF5757">+</Button>
          <Button onPress={() => minNum()} h="60px" w="60px" _text={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} bg="#FF5757">-</Button>    
          <Button onPress={() => multiNum()} h="60px" w="60px" _text={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} bg="#FF5757">*</Button>    
        </HStack>;
        <HStack space={3} justifyContent="center">        
          <Button onPress={() => disNum()} h="60px" w="60px" _text={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} bg="#FF5757">/</Button>    
          <Button onPress={() => perNum()} h="60px" w="60px" _text={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }} bg="#FF5757">%</Button>    
        </HStack>;
        <VStack alignItems="center">
          <Center bg="#FF6363" rounded="md">
            <Text p={5} fontWeight='bold' color='#fff'>Result</Text>
            <Text p={5} fontWeight='bold' color='#fff'>{result}</Text>
          </Center>
        </VStack>;
      </Box>
    </NativeBaseProvider>
  );
}