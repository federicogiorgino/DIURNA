import React, { FC, ReactNode } from "react";
import { Text, Paragraph } from "react-native-paper";

interface CustomTextProps {
  children: ReactNode;
  variant: string;
  style?: Object;
}
const CustomText: FC<CustomTextProps> = ({ children, variant, style }) => {
  switch (variant) {
    case "title":
      return (
        <Text
          style={[
            {
              fontFamily: "Bold",
              fontSize: 28,
            },
            style,
          ]}
        >
          {children}
        </Text>
      );

    case "appbar":
      return (
        <Text
          style={[
            {
              fontFamily: "Bold",
              fontSize: 22,
            },
            style,
          ]}
        >
          {children}
        </Text>
      );

    case "body":
      return (
        <Text
          style={[
            {
              fontFamily: "Regular",
              fontSize: 16,
            },
            style,
          ]}
        >
          {children}
        </Text>
      );
    case "paragraph":
      return (
        <Paragraph
          style={[
            {
              fontFamily: "Regular",
            },
            style,
          ]}
        >
          {children}
        </Paragraph>
      );
    default:
      return <Text>{children}</Text>;
  }
};

export default CustomText;
