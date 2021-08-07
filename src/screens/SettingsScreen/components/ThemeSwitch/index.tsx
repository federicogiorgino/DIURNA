import React, { useContext } from "react";
import { Switch } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../../../../context/Theme.context";
import Row from "../../../../components/Row";
import CustomText from "../../../../components/CustomText";

const ThemeSwitch = () => {
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);
  const { colors } = useTheme();
  return (
    <Row marginVertical={10} paddingVertical={10}>
      <CustomText
        variant="body"
        style={{
          fontFamily: "Bold",
          fontSize: 18,
        }}
      >
        Dark Mode
      </CustomText>
      <Switch
        value={isDarkTheme}
        onValueChange={switchTheme}
        color={colors.primary}
      />
    </Row>
  );
};

export default ThemeSwitch;
