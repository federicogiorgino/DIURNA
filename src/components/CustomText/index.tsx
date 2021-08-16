import React, { FC, ReactNode } from "react";
import { Text, Paragraph } from "react-native-paper";

interface CustomTextProps {
  children: ReactNode;
  variant: string;
  style?: Object;
  numberOfLines?: number;
}
const CustomText: FC<CustomTextProps> = ({
  children,
  variant,
  style,
  numberOfLines,
}) => {
  switch (variant) {
    case "title":
      return (
        <Text
          style={[
            {
              fontFamily: "Bold",
              fontSize: 30,
            },
            style,
          ]}
          numberOfLines={numberOfLines}
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
          numberOfLines={numberOfLines}
        >
          {children}
        </Text>
      );

    case "body":
      return (
        <Text
          style={[
            {
              fontFamily: "Medium",
              fontSize: 16,
            },
            style,
          ]}
          numberOfLines={numberOfLines}
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
          numberOfLines={numberOfLines}
        >
          {children}
        </Paragraph>
      );
    default:
      return <Text>{children}</Text>;
  }
};

export default CustomText;
