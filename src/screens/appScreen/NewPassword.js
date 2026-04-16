import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal
} from 'react-native'
import React, { useState } from 'react'
import Button from "../../assets/images/Button"
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import EyeClose from "../../assets/images/EyeClose.svg"
import EyeOpen from "../../assets/images/EyeOpen.svg";
import Circle from "../../assets/images/Circle.svg";

const NewPassword = ({ navigation }) => {

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  //  Password Strength
  const isWeak = password.length > 0 && password.length < 6
  const isStrong = password.length >= 6

  //  Valid check
  const isValid =
    password.length >= 6 &&
    confirmPassword.length >= 6 &&
    password === confirmPassword

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

          {/* Back */}
          <View style={{ marginTop: 50 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Button width={40} height={40} />
            </TouchableOpacity>
          </View>

          {/* Image */}
          <View style={{ marginTop: 30, alignItems: "center" }}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../../assets/images/Girl.gif")}
            />
          </View>

          {/* Title */}
          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>Create New Password</Text>
            <Text style={styles.desc}>
              Please set a strong and secure password
            </Text>
          </View>

          {/* Password */}
          <View style={styles.labelRow}>
            <Text style={styles.label}>New Password</Text>
            <Text style={styles.required}>*</Text>
          </View>

          <View style={{ position: "relative" }}>
            <TextInput
              placeholder='Enter new password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={[
                styles.input,
                password.length > 0 && {
                  borderWidth: 1,
                  borderColor: isStrong ? "green" : "red"
                }
              ]}
            />

            {/*  Show / Hide */}
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eye}
            >
              {showPassword ? (
                <EyeClose width={22} height={22} />
              ) : (
                <EyeOpen width={22} height={22} />
              )}
            </TouchableOpacity>
          </View>

          {/* Strength */}
          {isWeak && (
            <Text style={{ color: "red", fontSize: 12 }}>
              Weak Password  (min 6 chars)
            </Text>
          )}

          {isStrong && (
            <Text style={{ color: "green", fontSize: 12 }}>
              Strong Password
            </Text>
          )}

          {/* Confirm Password */}
          <View style={styles.labelRow}>
            <Text style={styles.label}>Confirm Password</Text>
            <Text style={styles.required}>*</Text>
          </View>


          <View style={{ position: "relative" }}>
            <TextInput
              placeholder='Re-enter password'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              style={[
                styles.input,
                confirmPassword.length > 0 && {
                  borderWidth: 1,
                  borderColor:
                    password === confirmPassword ? "green" : "red"
                }
              ]}
            />

            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eye}
            >
              {showConfirmPassword ? (
                <EyeClose width={22} height={22} />
              ) : (
                <EyeOpen width={22} height={22} />
              )}
            </TouchableOpacity>
          </View>
          {/* Match Check */}
          {confirmPassword.length > 0 && password !== confirmPassword && (
            <Text style={{ color: "red", fontSize: 12 }}>
              Password not match
            </Text>
          )}

          {/* Button */}
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity
              disabled={!isValid}
              onPress={() => setModalVisible(true)}
              style={[
                styles.btn,
                isValid && { backgroundColor: "orange" }
              ]}
            >
              <Text style={[
                styles.btnText,
                isValid && { color: "#fff" }
              ]}>
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>


          <View>
            <Modal
              visible={modalVisible}
              transparent
              animationType="fade"
            >
              <View style={styles.modalContainer}>

                <View style={styles.modalBox}>

                  <Circle width={136} height={136} />
                  <View style={{ marginTop: 15 }}>
                    <Text style={styles.modalText}>
                      Password Reset Successfully
                    </Text>
                  </View>

                 <View>
                   <Text style={styles.modalText1}>
                    You can now log in using your new
                    password
                  </Text>
                 </View>

                  <TouchableOpacity
                    style={styles.modalBtn}
                    onPress={() => {
                      setModalVisible(false)
                      navigation.replace("LoginScreen")
                    }}
                  >
                    <Text style={styles.modalBtnText}>Go to Login</Text>
                  </TouchableOpacity>

                </View>

              </View>
            </Modal>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default NewPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  container1: {
    flex: 1,
  },

  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18
  },

  desc: {
    fontFamily: "Poppins-Regular",
    fontSize: 14
  },

  labelRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  label: {
    fontFamily: "Poppins-Bold"
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

  eye: {
    position: "absolute",
    right: 15,
    top: 20
  },

  btn: {
    backgroundColor: "#E1E1E1",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  btnText: {
    color: "#000"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },

  modalBox: {
    width: 324,
    height:391,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center"
  },

  modalTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    marginBottom: 10
  },

  modalText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins-Bold"
  },
    modalText1: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Poppins-Regular"
  },

  modalBtn: {
    backgroundColor: "#F5800B",
    paddingVertical: 17,
    paddingHorizontal: 40,
    borderRadius: 8
  },

  modalBtnText: {
    color: "#fff",
    fontFamily: "Poppins-Regular"
  }
});