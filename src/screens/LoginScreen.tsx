import React, { useState, useCallback, useRef } from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import Button from "@/components/Button";
import FormTextInput, { FocusHandle } from "@/components/FormTextInput";
import strings from "@/config/strings";

export default function LoginScreen() {
  const passwordInputRef = useRef<FocusHandle>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleEmailChange = useCallback((email: string) => {
    setEmail(email);
  }, []);

  const handlePasswordChange = useCallback((password: string) => {
    setPassword(password);
  }, []);

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  function handleEmailSubmitPress() {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }

  const handleLoginPress = () => {
    alert(`${email} ${password}`);
  };

  const emailError =
    !email && emailTouched ? strings.EMAIL_REQUIRED : undefined;

  const passwordError =
    !password && passwordTouched ? strings.PASSWORD_REQUIRED : undefined;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <View style={styles.form}>
          {/* <Count /> */}
          <FormTextInput
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={handleEmailChange}
            onSubmitEditing={handleEmailSubmitPress}
            placeholder="Email"
            error={emailError}
            onBlur={handleEmailBlur}
          />
          <FormTextInput
            ref={passwordInputRef}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            secureTextEntry={true}
            returnKeyType="done"
            onBlur={handlePasswordBlur}
            error={passwordError}
          />
          <Button label="Login" onPress={handleLoginPress} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  form: {
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
    rowGap: 20,
  },
});
