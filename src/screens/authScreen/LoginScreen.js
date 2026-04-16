import { StyleSheet, Text, View, TextInput, TouchableOpacity , ScrollView , Platform , KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import Button from "../../assets/images/Button.svg";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from '../../utils/colors';

const LoginScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      colors={[COLORS.DarkBlue, COLORS.LightBlue]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >

       <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container1}>
            
                    <ScrollView
                      contentContainerStyle={{ flexGrow: 1 }}
                      showsVerticalScrollIndicator={false}
                    >

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate("SplashScreen");
            }
          }}
        >
          <Button width={40} height={40} />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Every</Text>
          <Text style={[styles.text, styles.highlight]}> small activity </Text>
        </View>

        <Text style={styles.text}>
          today builds a better
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>tomorrow for your</Text>
          <Text style={[styles.text, styles.highlight]}> child. </Text>
        </View>

      </View>

      <Text style={styles.subtitle}>
        Sign in to access Parent App
      </Text>

      <View style={styles.labelRow}>
        <Text style={{ fontFamily: "Poppins-Bold" }}>Email</Text>
        <Text style={styles.required}>*</Text>
      </View>

      <TextInput
        placeholder='Enter Email'
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <View style={styles.labelRow}>
        <Text style={{ fontFamily: "Poppins-Bold" }}>Password</Text>
        <Text style={styles.required}>*</Text>
      </View>

      <TextInput
        placeholder='Enter Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <View style={{ alignItems: "flex-end", marginTop: 5 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotScreen")}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.replace("MainApp")}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>or</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("OTPScreen")}
          style={styles.phoneBtn}
        >
          <Text style={styles.phoneText}>
            Login with Phone Number
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
 </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
   container1: {
    flex: 1,
   
  },

  textContainer: {
    marginTop: 30,
  },

  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    lineHeight: 30,
    color: "#000",
  },

  highlight: {
    color: "#494AE2",
    fontFamily: "Poppins-Bold"
  },

  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginTop: 10,

  },

  labelRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  required: {
    color: "#E02626"
  },

  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 8
  },

  forgot: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#0038f0"
  },

  buttonContainer: {
    marginTop: 30,
    alignItems: "center"
  },

  loginBtn: {
    backgroundColor: "#E1E1E1",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  loginText: {
    color: "#000",
    fontFamily: "Poppins-Regular"
  },

  phoneBtn: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  phoneText: {
    fontFamily: "Poppins-Regular"
  },

  or: {
    textAlign: "center",
    marginTop: 15,
    color: "#999"
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },

  signupText: {
    fontFamily: "Poppins-Regular"
  },

  signupLink: {
    color: "#2c20ff",
    fontFamily: "Poppins-Regular"
  }
});