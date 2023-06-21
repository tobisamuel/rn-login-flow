import React, { useRef, useImperativeHandle, forwardRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import colors from "../config/colors";

export type FocusHandle = {
  focus: () => void;
};

type Props = TextInputProps & { error?: string };

const FormTextInput = forwardRef<FocusHandle, Props>(
  ({ error, style, ...otherProps }, ref) => {
    const textInputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      focus() {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      },
    }));

    return (
      <View style={[styles.container, style]}>
        <TextInput
          ref={textInputRef}
          style={[styles.textInput, style]}
          selectionColor={colors.DODGER_BLUE}
          {...otherProps}
        />
        <Text style={styles.errorText}>{error || ""}</Text>
      </View>
    );
  }
);

export default FormTextInput;

const styles = StyleSheet.create({
  container: {},
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  errorText: {
    height: 20,
    color: colors.TORCH_RED,
  },
});
