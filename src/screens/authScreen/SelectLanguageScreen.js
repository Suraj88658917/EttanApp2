import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const data = [
  { id: '1', symbol: 'Aa', name: 'English' },
  { id: '2', symbol: 'Cé', name: 'French' },
];

const Splash01 = ({ navigation }) => {
  const [selectedLang, setSelectedLang] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedLang === item.id;
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => setSelectedLang(item.id)} 
        activeOpacity={0.8}
      >
        <Text style={[styles.symbolText, isSelected && styles.selectedText]}>
          {item.symbol}
        </Text>

        <Text style={[styles.langText, isSelected && styles.selectedText]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Select Language</Text>

      <Text style={styles.subtitle}>
        Please select one language to proceed in app
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity
        style={[
          styles.button,
          !selectedLang && styles.disabledButton,
        ]}
        disabled={!selectedLang}
        onPress={() => navigation.navigate('OnboardingScreen')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Splash01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F5',
    marginTop:50,
    paddingHorizontal:20
  },

  title: {
    fontSize: 26,
    fontFamily:"Poppins-Bold"
  },

  subtitle: {
    fontSize: 14,
    marginTop: 5,
    color: '#000000',
    fontFamily:"Poppins-Regular"
  },

  listContainer: {
    marginTop: 30,
  },

  item: {
    width: 155,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth:1
   
  },

  selectedItem: {
    borderColor: '#2061f8',
    backgroundColor: '#ffffff',
  },

  langText: {
    fontSize: 18,
    color: '#000',
  },



  symbolText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'blue',
  },

  button: {
    backgroundColor: '#ff9b00',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginBottom:20

  },

  disabledButton: {
    backgroundColor: '#ccc',
    opacity: 0.6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily:"Poppins-Regular",
    textAlign:"center"
  },
});