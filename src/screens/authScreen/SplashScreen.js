import React, { useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import CustomText from "../../components/CustomText";


const SplashScreen = ({ navigation }) => {

  useEffect(() => {

    console.log(" Splash Started");

    const timer = setTimeout(() => {
      navigation.replace( "LoginScreen" , "MainApp");
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <LinearGradient
      colors={[COLORS.DarkBlue, COLORS.LightBlue]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <CustomText size={6} color="#fff">
        Welcome Ettan App
      </CustomText>

    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});