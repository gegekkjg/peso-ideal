import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View,Switch, TextInput } from 'react-native';
import styles from './globalStyles';

// http://conversorfacil.com.br/calcular/peso-ideal

export default function App() {
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');

  const calcular = (altura,sexo,peso) => {
    if(sexo == false){
      let h = parseInt(altura)
      setPeso(( h - 100 ) - [ ( h - 150 ) / 4 ])
    } else if(sexo == true){
      let h = parseInt(altura)
      setPeso(( h - 100 ) - [ ( h - 150 ) / 2 ])
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Peso ideal</Text>
        <Text>Altura</Text>
        <View>
          <TextInput
          value={altura}
          onChangeText={setAltura}
          style={styles.input}
          />
        </View>
        <Text>Sexo</Text>
        <View>
          <Switch
                trackColor={{ false: '#b1deef', true: '#b1deef' }}
                thumbColor={sexo ? '#298DC7' : '#298DC7'}
                ios_backgroundColor="#298DC7"
                onValueChange={setSexo}
                value={sexo}
          />
        </View>
        <Pressable
          style={{}}
          onPress={() => calcular(altura,sexo,peso)}
        >
          <Text>
            calcular
          </Text>
        </Pressable>

        <View><Text>{`${peso}`}</Text></View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
