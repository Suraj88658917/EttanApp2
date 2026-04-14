import React from "react";
import { Text } from "react-native";
import { wp } from "../utils/responsive";
import { COLORS } from "../utils/colors";

const CustomText = ({ children, size = 4, color = COLORS.black, style }) => {
  return (
    <Text style={[{ fontSize: wp(`${size}%`), color }, style]}>
      {children}
    </Text>
  );
};

export default CustomText;