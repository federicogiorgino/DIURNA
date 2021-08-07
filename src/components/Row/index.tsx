import React, { FC, ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface RowProps {
  children: ReactNode;
  marginBottom?: number;
  marginVertical?: number;
  paddingVertical?: number;
}

const Row: FC<RowProps> = ({
  children,
  marginBottom = 0,
  marginVertical = 0,
  paddingVertical = 0,
}) => {
  return (
    <View
      style={[styles.row, { marginBottom, marginVertical, paddingVertical }]}
    >
      {children}
    </View>
  );
};

export default Row;
