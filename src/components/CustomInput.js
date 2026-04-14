import React from "react";
import { TextInput, StyleSheet } from "react-native";
import {wp , hp} from "../utils/responsive";
import {COLORS} from "../utils/colors";

const CustomInput = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: hp("6%"),
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: wp("3%"),
    marginVertical: hp("1%"),
  },
});