import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Button from "../../assets/images/Button.svg";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import Pencil from "../../assets/images/pencil.svg";
import Clock from "../../assets/images/clock.svg";
import ArrowBlue from "../../assets/images/ArrowBlue.svg"
import Circle from "../../assets/images/circle1.svg";
import Circle1 from "../../assets/images/circle11.svg";


const OTPVerify = ({ navigation, route }) => {

  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(true);
  const [modalVisible, setModalVisible] = useState(false)

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const phone = route?.params?.phone;

  // Timer
  useEffect(() => {
    let interval = null;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  //  Auto focus first box
  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  //  Resend OTP
  const handleResend = () => {
    setTimer(30);
    setIsActive(true);
    console.log("OTP Resent");
  };

  //  Handle input
  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  //  Backspace support
  const handleKeyPress = (e, index) => {
    if (
      e.nativeEvent.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputs.current[index - 1].focus();
    }
  };

  //  Verify
  const handleVerify = () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }
    setModalVisible(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
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
          <Text style={styles.title}>Verify OTP</Text>
        </View>
      </View>

      {/* Title */}
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={styles.mainText}>
          Enter the OTP and verify{"\n"}to continue
        </Text>
      </View>

      {/* Subtitle */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.subText}>
          Enter the 6-digit OTP sent to your mobile number
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.phone}>{phone}</Text>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.change}> Change</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 3, marginLeft: 3 }}>
            <Pencil width={14} height={14} />
          </View>
        </View>
      </View>

      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            style={[
              styles.otpBox,
              digit !== "" && {
                borderWidth: 2,
                borderColor: "#ffffff"
              }
            ]}
          />
        ))}
      </View>

      {/* Timer */}
      <View style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20
      }}>

        <View style={{ width: 160, alignItems: "flex-end" }}>
          <Text style={styles.smallText}>
            Don’t get the OTP?
          </Text>
        </View>

        <View style={{ width: 120, height: 30, alignItems: "center" }}>
          {isActive ? (
            <View style={{
              backgroundColor: "#494AE2",
              paddingHorizontal: 10,
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 4,

            }}>
              <Clock width={15} height={15} />
              <Text style={[styles.timer, { color: "#fff", marginLeft: 5 }]}>
                Retry in {formatTime(timer)}
              </Text>
            </View>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resend}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          )}

        </View>
      </View>

      {/* Button */}
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <TouchableOpacity
          onPress={handleVerify}
          disabled={otp.join("").length !== 6}
          style={[
            styles.btn,
            otp.join("").length === 6 && { backgroundColor: "#F5800B" }
          ]}
        >
          <Text style={[
            styles.btnText,
            otp.join("").length === 6 && { color: "#fff" }
          ]}>
            Verify & Continue
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}
          style={{ flexDirection: "row", justifyContent: "center", marginTop: 20, gap: 5 }}>
          <ArrowBlue width={20} height={20} />
          <Text style={{ fontFamily: "Poppins-Regular", color: "#494AE2" }}>Back to Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Modal
          transparent={true}
          animationType="fade"
          visible={modalVisible}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <View style={{marginTop:20}}>
                <Circle width={120} height={120}/>
               <View style={{position:"absolute" , top:5 , left:10}}>
                <Circle1 width={100} height={100}/>
               </View>
              </View>
             <View style={{marginTop:20}}>
               <Text style={styles.modalTitle}>Verification Successful! </Text>
             </View>
              <Text style={styles.modalText}>
                Your OTP has been verified. You’re all {"\n"}set to continue
              </Text>

              <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => {
                  setModalVisible(false);
                  navigation.replace("MainApp");
                }}
              >
                <Text style={styles.modalBtnText}>Continue to App</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
      </View>


    </LinearGradient>
  );
};

export default OTPVerify;

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

  mainText: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },

  subText: {
    fontFamily: "Poppins-Regular",
    marginTop: 10
  },

  phone: {
    fontFamily: "Poppins-Bold",
    marginTop: 5
  },

  change: {
    color: "#0038f0",
    textDecorationLine: "underline",
    marginLeft: 5
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20
  },

  otpBox: {
    width: 45,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18
  },

  smallText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12
  },

  timer: {
    marginTop: 5,
    color: "#ffffff",
    fontFamily: "Poppins-Regular",
    fontSize: 10
  },

  resend: {
    marginTop: 5,
    color: "#a5a2a2",
    textDecorationLine: "underline"
  },

  btn: {
    backgroundColor: "#E1E1E1",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center"
  },

  btnText: {
    color: "#000",
    fontFamily: "Poppins-Regular"
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.4)", // dark background
  justifyContent: "center",
  alignItems: "center"
},

modalBox: {
  width:324,
  height:354,
  backgroundColor: "#fff",
  borderRadius: 15,
  padding: 20,
  alignItems: "center"
},

modalTitle: {
  fontFamily: "Poppins-Bold",
  fontSize: 18,
  marginBottom: 10
},

modalText: {
  fontFamily: "Poppins-Regular",
  fontSize: 13,
  textAlign: "center",
  marginBottom: 20
},

modalBtn: {
  backgroundColor: "#F5800B",
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 10
},

modalBtnText: {
  color: "#fff",
  fontFamily: "Poppins-Regular"
}
});