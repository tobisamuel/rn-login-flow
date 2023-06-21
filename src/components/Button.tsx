import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@/config/colors";

type Props = {
  disabled?: boolean;
  label: string;
  onPress: () => void;
};

export default function Button({ disabled, label, onPress }: Props) {
  const containerStyle = [
    styles.container,
    disabled ? styles.containerDisabled : styles.containerEnabled,
  ];

  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.DODGER_BLUE,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)",
  },
  containerEnabled: {
    opacity: 1,
  },
  containerDisabled: {
    opacity: 0.3,
  },
  text: {
    color: colors.WHITE,
    textAlign: "center",
  },
});
