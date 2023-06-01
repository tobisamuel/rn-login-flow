import { StyleSheet, TextInput, TextInputProps } from "react-native";
import colors from "@/config/colors";

type Props = TextInputProps;

export default function FormTextInput({ style, ...otherProps }: Props) {
  return (
    <TextInput
      selectionColor={colors.DODGER_BLUE}
      style={[styles.textInput, style]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
});
