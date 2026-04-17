import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import Button from "../../assets/images/Button.svg";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/colors";
import Step1 from '../../assets/images/step1.svg';
import Step2 from "../../assets/images/step2.svg";
import { Picker } from '@react-native-picker/picker';

const RegisterScreen = ({ navigation }) => {

  const [step, setStep] = useState(1);

  // STEP 1
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [relationship, setRelationship] = useState("");

  // STEP 2
  const [childName, setChildName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [developer, setDeveloper] = useState("");

  // VALIDATION
  const isStep1Valid =
    name && number.length === 10 && email && address && relationship;

  const isStep2Valid =
    childName && ageGroup && gender && language && developer;

  // HANDLE NEXT
  const handleNext = () => {
    if (step === 1 && isStep1Valid) {
      setStep(2);
    } else if (step === 2 && isStep2Valid) {
      navigation.navigate("OTPVerify", {
        parentName: name,
        phone: number,
        email: email,
        address: address,
        relationship: relationship,
        childName: childName,
        ageGroup: ageGroup,
        gender: gender,
        language: language,
        concern: developer
      });
    }
  };

  // STEP INDICATOR
  const StepIndicator = ({ currentStep }) => (
    <View style={styles.stepContainer}>

      {/* STEP 1 */}
      <View style={styles.stepWrapper}>
        <View style={[styles.outerCircle, currentStep >= 1 && { borderColor: "#494AE2" }]}>
          <View style={[styles.circle, currentStep >= 1 && styles.activeCircle]}>
            <Step1 width={19} height={19} fill={currentStep >= 1 ? "#fff" : "#999"} />
          </View>
        </View>
        <Text style={[styles.stepText, currentStep >= 1 && styles.activeText]}>
          Step 1
        </Text>
      </View>

      {/* LINE */}
      <View style={[styles.line, currentStep >= 2 && { backgroundColor: "#494AE2" }]} />

      {/* STEP 2 */}
      <View style={styles.stepWrapper}>
        <View style={[styles.outerCircle, currentStep >= 2 && { borderColor: "#494AE2" }]}>
          <View style={[styles.circle, currentStep >= 2 && styles.activeCircle]}>
            <Step2 width={19} height={19} fill={currentStep >= 2 ? "#fff" : "#999"} />
          </View>
        </View>
        <Text style={[styles.stepText, currentStep >= 2 && styles.activeText]}>
          Step 2
        </Text>
      </View>

    </View>
  );

  const renderInput = (label, value, setter, keyboard, maxLength) => (
    <>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.required}>*</Text>
      </View>

      <TextInput
        placeholder={`Enter ${label}`}
        value={value}
        onChangeText={setter}
        keyboardType={keyboard}
        maxLength={maxLength}
        style={styles.input}
      />
    </>
  );

  return (
    <LinearGradient colors={[COLORS.DarkBlue, COLORS.LightBlue]} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ paddingVertical: 30 }}>

          {/* BACK */}
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Button width={40} height={40} />
            </TouchableOpacity>
          </View>

          {/* STEP INDICATOR */}
          <StepIndicator currentStep={step} />

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <View style={styles.center}>
                <Text style={styles.title}>Parent Details</Text>
                <Text style={styles.subtitle}>Tell us a little about yourself.</Text>
              </View>

              {renderInput("Parent Name", name, setName)}
              {renderInput("Phone Number", number, setNumber, "number-pad", 10)}
              {renderInput("Email Address", email, setEmail)}
              {renderInput("Address", address, setAddress)}

              <View style={styles.labelRow}>
                <Text style={styles.label}>Relationship</Text>
                <Text style={styles.required}>*</Text>
              </View>

              <View style={styles.dropdown}>
                <Picker selectedValue={relationship} onValueChange={setRelationship}>
                  <Picker.Item label="Select Relationship" value="" />
                  <Picker.Item label="Parent" value="parent" />
                  <Picker.Item label="Guardian" value="guardian" />
                </Picker>
              </View>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <View style={styles.center}>
                <Text style={styles.title}>Child Profile</Text>
                <Text style={styles.subtitle}>Add your child’s details</Text>
              </View>

              {renderInput("Child Name", childName, setChildName)}
              {renderInput("Phone Number", number, setNumber, "number-pad", 10)}

              {/* AGE GROUP */}
              <View style={styles.labelRow}>
                <Text style={styles.label}>Age Group</Text>
                <Text style={styles.required}>*</Text>
              </View>

              <View style={styles.dropdown}>
                <Picker selectedValue={ageGroup} onValueChange={setAgeGroup}>
                  <Picker.Item label="Select Age Group" value="" />
                  <Picker.Item label="3-4 Years" value="3-4" />
                  <Picker.Item label="5-6 Years" value="5-6" />
                  <Picker.Item label="7-8 Years" value="7-8" />
                </Picker>
              </View>

              {/* GENDER */}
              <View style={styles.labelRow}>
                <Text style={styles.label}>Gender</Text>
                <Text style={styles.required}>*</Text>
              </View>

              <View style={styles.dropdown}>
                <Picker selectedValue={gender} onValueChange={setGender}>
                  <Picker.Item label="Select Gender" value="" />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              </View>

              {/* LANGUAGE */}
              <View style={styles.labelRow}>
                <Text style={styles.label}>Language</Text>
                <Text style={styles.required}>*</Text>
              </View>

              <View style={styles.langRow}>
                {["English", "French"].map((lang) => (
                  <TouchableOpacity
                    key={lang}
                    onPress={() => setLanguage(lang)}
                    style={[
                      styles.langBtn,
                      language === lang && styles.langActive
                    ]}
                  >
                    <Text style={[
                      styles.langText,
                      language === lang && { color: "#fff" }
                    ]}>
                      {lang}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* DEVELOPMENT */}
              <View style={styles.labelRow}>
                <Text style={styles.label}>Development Concerns</Text>
                <Text style={styles.required}>*</Text>
              </View>

              <View style={styles.dropdown}>
                <Picker selectedValue={developer} onValueChange={setDeveloper}>
                  <Picker.Item label="Select Option" value="" />
                  <Picker.Item label="Developmental" value="Developmental" />
                  <Picker.Item label="Behavioral" value="Behavioral" />
                  <Picker.Item label="Learning" value="Learning" />
                  <Picker.Item label="Sensory" value="Sensory" />
                  <Picker.Item label="Therapy" value="Therapy" />
                </Picker>
              </View>
            </>
          )}

          {/* BUTTON */}
          <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
            <TouchableOpacity
              disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
              onPress={handleNext}
              style={[
                styles.btn,
                ((step === 1 && isStep1Valid) ||
                  (step === 2 && isStep2Valid)) && { backgroundColor: "#ff8000" }
              ]}
            >
              <Text style={[
                styles.btnText,
                ((step === 1 && isStep1Valid) ||
                  (step === 2 && isStep2Valid)) && { color: "#fff" }
              ]}>
                {step === 1 ? "Next" : "Save Profile"}
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },

  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 70
  },

  stepWrapper: { alignItems: "center" },

  outerCircle: {
    padding: 6,
    borderRadius: 50,
    borderWidth: 1.4,
    borderColor: "#0c0606"
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  activeCircle: { backgroundColor: "#494AE2" },

  line: {
    flex: 1,
    height: 3,
    backgroundColor: "#000",
    marginBottom: 25
  },

  stepText: {
    marginTop: 5,
    fontFamily: "Poppins-Regular",
    color: "#999"
  },

  activeText: {
    color: "#3340d0",
    fontFamily: "Poppins-Bold"
  },

  center: { alignItems: "center", marginTop: 20 },

  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22
  },

  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13
  },

  labelRow: {
    flexDirection: "row",
    marginTop: 15,
    paddingHorizontal: 20
  },

  label: { fontFamily: "Poppins-Bold" },

  required: { color: "#E02626", marginLeft: 2 },

  input: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 10,
    padding: 12
  },

  dropdown: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 10
  },

  langRow: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 20,
    marginTop: 10
  },

  langBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor:"#fff"
  },

  langActive: {
    backgroundColor: "#2c09c8",
  },

  langText: {
    color: "#000"
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
  }
});