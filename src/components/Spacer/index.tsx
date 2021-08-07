import React, { FC } from "react";
import { View } from "react-native";

interface SpacerProps {
  height?: number;
}

const Spacer: FC<SpacerProps> = ({ height }) => {
  return <View style={{ height }} />;
};

export default Spacer;
