import React from "react";
import { COLORS } from "../utils/colors";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, disabled, onPress }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        disabled && styles.disabledButton
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.or,
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10
  },

  disabledButton: {
    backgroundColor: "#ccc",
    opacity: 0.6
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});