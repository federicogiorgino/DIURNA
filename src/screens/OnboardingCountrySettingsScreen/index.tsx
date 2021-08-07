import React, { FC, useContext } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "react-native-paper";

import Page from "../../components/Page";
import Row from "../../components/Row";
import SafeArea from "../../components/SafeArea";
import CustomText from "../../components/CustomText";
import CountryPickerTile from "../../components/CountryPickerTile";
import { countries } from "../../data/countries";
import { CountryContext } from "../../context/Country.context";

import { styles } from "./styles";

interface OnboardingCountrySettingsScreenProps {
  navigation: any;
}

const OnboardingCountrySettingsScreen: FC<OnboardingCountrySettingsScreenProps> =
  ({ navigation }) => {
    const { colors } = useTheme();
    const { selectedCountry } = useContext(CountryContext);
    return (
      <SafeArea>
        <Page>
          <View style={{ flex: 5 }}>
            <Row marginBottom={10}>
              <CustomText variant="title">Select your country</CustomText>
            </Row>

            <Row>
              <CustomText variant="body">
                To get the best 'tailored' experience out of DIURNA select a
                country of interest and its corresponding language.
              </CustomText>
            </Row>

            <FlatList
              style={{ marginVertical: 10, marginTop: 10 }}
              data={countries}
              renderItem={({ item }) => <CountryPickerTile country={item} />}
              keyExtractor={(item) => item.iso.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={{ height: 60 }}>
            <TouchableOpacity
              disabled={selectedCountry === ""}
              style={[
                styles.fab,
                {
                  backgroundColor:
                    selectedCountry === "" ? "grey" : colors.primary,
                },
              ]}
              onPress={() =>
                navigation.navigate("OnboardingCategoriesSettingsScreen")
              }
            >
              <Text style={{ fontFamily: "Bold", fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          </View>
        </Page>
      </SafeArea>
    );
  };

export default OnboardingCountrySettingsScreen;
