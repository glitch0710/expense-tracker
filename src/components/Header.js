import { View, Image } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";

const Header = () => {
  const theme = useTheme();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 300, height: 100 }}
      />
      <Text variant="titleMedium" style={{ color: theme.colors.secondary }}>
        Track your expenses easily
      </Text>
    </View>
  );
};

export default Header;
