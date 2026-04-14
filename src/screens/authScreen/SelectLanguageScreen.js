import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomText from "../../components/CustomText";
import { COLORS } from "../../utils/colors";
import Aa from "../../assets/images/Aa.svg";
import Ce from "../../assets/images/Ce.svg";
import { wp, hp } from "../../utils/responsive";

const SelectLanguageScreen = ({ navigation }) => {

  const [selectedLang, setSelectedLang] = useState(null);

  return (
    <View style={styles.container}>

      <CustomText size={7} style={styles.Text}>
        Select Language
      </CustomText>

      <CustomText size={3.9} style={styles.Text1}>
        Please select one language to proceed in app
      </CustomText>

      <View style={styles.row}>

        <TouchableOpacity
          style={[
            styles.card,
            selectedLang === "en" && styles.selectedCard
          ]}
          onPress={() => setSelectedLang("en")}
        >
          <Aa width={40} height={25} />
          <CustomText style={[
            styles.label,
            selectedLang === "en" && styles.selectedText
          ]}>
            English
          </CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            selectedLang === "fr" && styles.selectedCard
          ]}
          onPress={() => setSelectedLang("fr")}
        >
          <Ce width={40} height={25} />
          <CustomText style={[
            styles.label,
            selectedLang === "fr" && styles.selectedText
          ]}>
            French
          </CustomText>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={[
          styles.button,
          !selectedLang ? styles.disabledButton : styles.activeButton
        ]}
        disabled={!selectedLang}
        onPress={() => {
          if (!selectedLang) return;
          navigation.replace("OnboardingScreen");
        }}
      >
        <CustomText
          style={[
            styles.buttonText,
            selectedLang && styles.activeText
          ]}
        >
          Continue
        </CustomText>
      </TouchableOpacity>

    </View>
  )
}

export default SelectLanguageScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LightBlue,
  },

  Text: {
    fontFamily: "Poppins-Bold",
    marginTop: 50,
    paddingHorizontal: 20
  },

  Text1: {
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 20,
    marginTop: 5
  },

  row: {
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },

  card: {
    backgroundColor: "#fff",
    width: wp("43%"),
    height: hp("13%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedCard: {
    borderWidth: 1,
    borderColor: "#2c9dff",
    backgroundColor: "#FFrgb(255, 255, 255)"
  },

  label: {
    marginTop: 8
  },



  button: {
    position: "absolute",
    bottom: 15,
    left: 20,
    right: 20,
    backgroundColor: "#ff9b00",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  disabledButton: {
    backgroundColor: "#ccc"
  },

  activeButton: {
  backgroundColor: "#ff9b00", // 
},

activeText: {
  color: "#fff", 
},

  buttonText: {
    color: "#000000",
    fontFamily: "Poppins-Regular"
  }
});