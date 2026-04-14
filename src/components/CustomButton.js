import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { wp, hp } from "../utils/responsive";
import { COLORS } from "../utils/colors";
import CustomText from "./CustomText"

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <CustomText size={4.5} color={COLORS.white}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: hp("6%"),
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: hp("1%"),
  },
});