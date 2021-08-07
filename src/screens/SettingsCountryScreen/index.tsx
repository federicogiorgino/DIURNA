import React, { FC } from "react";
import { FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import SafeArea from "../../components/SafeArea";
import CustomText from "../../components/CustomText";
import Row from "../../components/Row";
import Page from "../../components/Page";

import CountryPickerTile from "../../components/CountryPickerTile";
import { countries } from "../../data/countries";

import { styles } from "./styles";

interface SettingsCountryScreenProps {
  navigation: any;
}

const SettingsCountryScreen: FC<SettingsCountryScreenProps> = ({
  navigation,
}) => {
  const { colors } = useTheme();
  return (
    <SafeArea>
      <Page>
        <Row marginBottom={15}>
          <Ionicons
            name="md-arrow-back-outline"
            size={24}
            color={colors.primary}
            onPress={() => navigation.goBack()}
          />
          <CustomText variant="appbar">Select your country</CustomText>
          <Ionicons
            name="md-arrow-back-outline"
            size={24}
            color="transparent"
          />
        </Row>
        <FlatList
          data={countries}
          renderItem={({ item }) => <CountryPickerTile country={item} />}
          keyExtractor={(item) => item.iso}
          showsVerticalScrollIndicator={false}
        />
      </Page>
    </SafeArea>
  );
};

export default SettingsCountryScreen;
