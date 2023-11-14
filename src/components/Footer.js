import { View } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";

const Footer = () => {
  const theme = useTheme();
  return (
    <View>
      <Text variant="labelSmall" style={{ color: theme.colors.tertiary }}>
        Copyright © ET 2023
      </Text>
    </View>
  );
};

export default Footer;
