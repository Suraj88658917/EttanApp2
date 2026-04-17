import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'
import Button from "../../assets/images/Button.svg"
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors"

const ForgotScreen = ({ navigation }) => {

  const [number, setNumber] = useState("")

  const isValidNumber = number.length === 10;

  const handleSend = () => {
    if (!isValidNumber) {
      Alert.alert("Error", "Enter valid 10 digit number");
      return;
    }

    Alert.alert(
      "Success",
      "OTP Sent!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("NewPassword")
        }
      ]
    );
  };

  return (
    <LinearGradient
      colors={[COLORS.DarkBlue, COLORS.LightBlue]}
      style={styles.container}
    >
       <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container1}>
      
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
              >
      

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button width={40} height={40} />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Man.gif")}
        />
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.desc}>
          Enter your registered email or phone number to
receive a reset link/OTP
        </Text>
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>

        <TextInput
          placeholder='Enter Phone Number'
          value={number}
          onChangeText={(text) => {
            const cleaned = text.replace(/[^0-9]/g, "");
            setNumber(cleaned);
          }}
          style={[
            styles.input,
            number.length > 0 && {
              borderWidth: 1,
              borderColor: isValidNumber ? "green" : "red"
            }
          ]}
          keyboardType="phone-pad"
          maxLength={10}
        />

        {/* Validation Text */}
        {number.length > 0 && !isValidNumber && (
          <Text style={{ color: "red", fontSize: 12 }}>
            Enter valid 10 digit number 
          </Text>
        )}

        {isValidNumber && (
          <Text style={{ color: "green", fontSize: 12 }}>
            Valid number 
          </Text>
        )}
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={!isValidNumber}
          style={[
            styles.btn,
            isValidNumber && { backgroundColor: "orange" }
          ]}
          onPress={handleSend}
        >
          <Text style={[
            styles.btnText,
            isValidNumber && { color: "#ffffff" }
          ]}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
 </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default ForgotScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 50,
    paddingHorizontal: 20
  },

  imageContainer: {
    marginTop: 20,
  },

  image: {
    width: 200,
    height: 200
  },

  textContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  },

  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 16
  },

  desc: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    marginTop: 5
  },

  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  },

  label: {
    fontFamily: "Poppins-Bold",
    fontSize: 13
  },

  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 8
  },

  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 120
  },

  btn: {
    backgroundColor: "#E1E1E1",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  btnText: {
    color: "#000",
    fontFamily: "Poppins-Regular"
  }
});