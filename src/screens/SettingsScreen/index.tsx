import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import SafeArea from "../../components/SafeArea";
import CustomText from "../../components/CustomText";
import Row from "../../components/Row";
import Page from "../../components/Page";
import ThemeSwitch from "./components/ThemeSwitch";

import { styles } from "./styles";

interface SettingsScreenProps {
  navigation: any;
}

const SettingScreen: FC<SettingsScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeArea>
      <Page>
        <Row marginBottom={30}>
          <CustomText variant="title">Settings</CustomText>
        </Row>

        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsCountryScreen")}
        >
          <Row marginVertical={10} paddingVertical={10}>
            <CustomText variant="body">Change Country</CustomText>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={colors.primary}
            />
          </Row>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsCategoriesScreen")}
        >
          <Row marginVertical={10} paddingVertical={10}>
            <CustomText variant="body">Edit Categories</CustomText>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={colors.primary}
            />
          </Row>
        </TouchableOpacity>

        <ThemeSwitch />
      </Page>
    </SafeArea>
  );
};

export default SettingScreen;
