import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import FormTextInput from "@/components/FormTextInput";
import Button from "@/components/Button";
import colors from "@/config/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(email: string) {
    setEmail(email);
  }

  function handlePasswordChange(password: string) {
    setPassword(password);
  }

  function handleLoginPress() {
    console.log("Login button pressed");
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <FormTextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Email"
        />
        <FormTextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
        />
        <Button label="Login" onPress={handleLoginPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
  },
});
