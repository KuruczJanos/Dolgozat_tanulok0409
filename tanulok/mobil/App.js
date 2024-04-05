// File: App.js
// Author: Kurucz János
// Copyright: 2024, Kurucz János
// Group: Szoft II/1/E
// Date: 2024-04-05
// Github: https://github.com/KuruczJanos/Dolgozat_tanulok0409.git

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { lekerTanulok } from './tanulokservice';
import { FlatList } from 'react-native-web';

export default function App() {

  const[tanulok, beallitTanulok] = useState([]);

  useEffect(() => {
    lekerTanulok().then(data =>{
      beallitTanulok(data)
    }
    );
  });

  return(
    <View>
      <FlatList
        data = {tanulok}
        renderItem = {({item})=> (
          <View style={styles.tanulokLista}>
          <View styles={styles.footer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.cityText}>Lakhely: {item.city}</Text>
          <Text style={styles.birthText}>Születési dátum: {item.birth}</Text>
          <Text style={styles.groupIdText}>Csoport ID: {item.groupId}</Text>
          </View>
          </View>
        )} />
        <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  tanulokLista: {
    border: 'solid 2px black',
    borderRadius: 8,
    padding: 5,
    margin: 5,
    backgroundColor: 'gold',
    fontFamily: 'san-serif',
  },
  nameText: {
    fontSize: 25,
    shadowColor: 'red',
    shadowRadius: 5,
    textAlign: 'center',
  },
  cityText: {
    fontSize: 20,
    textAlign: 'center',
  },
  birthText: {
    fontSize: 15,
    textAlign: 'center',
  },
  groupIdText: {
    fontSize: 15,
    textAlign: 'center',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
