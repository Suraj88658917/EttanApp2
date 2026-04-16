import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import Button from "../../assets/images/Button.svg";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";

const OTPScreen = ({ navigation }) => {

  const [phone, setPhone] = useState("");

  const isValid = phone.length === 10;

  const handleVerify = () => {
    if (!isValid) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    navigation.navigate("OTPVerify" , { phone: phone }); 
  };

  return (
    <LinearGradient
      colors={[COLORS.lightWight, COLORS.LightBlue]}
      style={styles.container}
    >

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button width={40} height={40} />
        </TouchableOpacity>

        <View style={styles.headerTitle}>
          <Text style={styles.title}>Login with OTP</Text>
        </View>
      </View>

      {/* Subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>
          Enter your registered phone number
        </Text>
        <Text style={styles.required}>*</Text>
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter phone number"
          placeholderTextColor={"#C5C5C5"}
          value={phone}
          onChangeText={setPhone}
          keyboardType="number-pad"
          maxLength={10}
          style={[
            styles.input,
            phone.length > 0 && {
              borderWidth: 1,
              borderColor: isValid ? "green" : "red"
            }
          ]}
        />
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={!isValid}
          onPress={handleVerify}
          style={[
            styles.btn,
            isValid && { backgroundColor: "#F5800B" }
          ]}
        >
          <Text style={[
            styles.btnText,
            isValid && { color: "#fff" }
          ]}>
            Send OTP
          </Text>
        </TouchableOpacity>
      </View>

      {/* Switch login */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>
            Login with Password instead
          </Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },

  headerTitle: {
    flex: 1,
    alignItems: "center",
    marginRight: 40 
  },

  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },

  textContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },

  subtitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 13,
  },

  required: {
    color: "#E02626",
    marginLeft: 3
  },

  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    fontFamily: "Poppins-Regular"
  },

  buttonContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  btn: {
    backgroundColor: "#E1E1E1", 
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
  },

  btnText: {
    color: "#000",
    fontFamily: "Poppins-Regular",
  },

  footer: {
    marginTop: 20,
    alignItems: "center"
  },

  link: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#000000",
      textDecorationLine: "underline"
  }
});