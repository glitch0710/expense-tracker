import { StyleSheet, View } from "react-native";
import React from "react";
import { Divider, useTheme, Text, IconButton } from "react-native-paper";

const SignInButtons = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text variant="titleSmall" style={{ color: theme.colors.primary }}>
        Or sign in with
      </Text>
      <Divider />
      <View style={styles.iconButtons}>
        <IconButton
          icon="google"
          iconColor={theme.colors.onTertiaryContainer}
          size={30}
          mode="contained"
          containerColor={theme.colors.onSecondary}
          onPress={() => console.log("Pressed")}
        />
        <IconButton
          icon="facebook"
          iconColor={theme.colors.onTertiaryContainer}
          size={30}
          mode="contained"
          containerColor={theme.colors.onSecondary}
          onPress={() => console.log("Pressed")}
        />
      </View>
    </View>
  );
};

export default SignInButtons;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
