import React, { useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import CustomText from "../../components/CustomText";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {

  useEffect(() => {

    const checkToken = async () => {
      try {
        console.log(" Splash Started");

        const token = await AsyncStorage.getItem("token");
        console.log("Token:", token);

        setTimeout(() => {
          if (token) {
            navigation.replace("MainApp"); 
          } else {
            navigation.replace("LoginScreen"); 
          }
        }, 2000);

      } catch (error) {
        console.log("Error:", error);
        navigation.replace("LoginScreen");
      }
    };

    checkToken();

  }, []);

  return (
    <LinearGradient
      colors={[COLORS.DarkBlue, COLORS.LightBlue]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <CustomText size={6} color="#7a4949">
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