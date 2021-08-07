import React, { FC, useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Row from "../Row";
import CustomText from "../CustomText";

import { Country } from "../../@types/country";
import { CountryContext } from "../../context/Country.context";

import { styles } from "./styles";

interface CountryPickerTileProps {
  country: Country;
}

const CountryPickerTile: FC<CountryPickerTileProps> = ({ country }) => {
  const { colors } = useTheme();
  const { selectCountry, selectedCountry } = useContext(CountryContext);
  return (
    <TouchableOpacity onPress={() => selectCountry(country.iso)}>
      <Row marginVertical={10}>
        <View style={styles.countryContainer}>
          <Image source={{ uri: country.flag }} style={styles.flag} />
          <CustomText
            variant="body"
            style={{ fontFamily: "Bold", fontSize: 18 }}
          >
            {country.name}
          </CustomText>
        </View>

        {selectedCountry === country.iso && (
          <View
            style={{
              backgroundColor: colors.primary,
              borderRadius: 20,
              padding: 3,
            }}
          >
            <Ionicons name="md-checkmark-sharp" size={18} color="white" />
          </View>
        )}
      </Row>
    </TouchableOpacity>
  );
};

export default CountryPickerTile;
