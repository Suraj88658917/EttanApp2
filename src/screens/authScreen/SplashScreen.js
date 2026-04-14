import React, { useEffect } from "react";
import { StyleSheet, StatusBar , View  } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";
import {wp , hp} from "../../utils/responsive";

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
            navigation.replace("SelectLanguageScreen"); 
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
       start={{ x: 1, y: 0 }}
       end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

     <View>
       <LottieView
        source={require("../../assets/lottie/splash.json")}
        autoPlay
        loop={false}
        style={{ width: wp("50%"), height: hp("30%") }}
      />
     </View>


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