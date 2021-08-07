import React, { FC, useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { TouchableOpacity, View, Image } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

import CenteredPage from "../../components/CenteredPage";
import CustomText from "../../components/CustomText";
import SafeArea from "../../components/SafeArea";
import Spacer from "../../components/Spacer";

import { styles } from "./styles";

interface OnboardingSplashScreenProps {
  navigation: any;
}

const OnboardingSplashScreen: FC<OnboardingSplashScreenProps> = ({
  navigation,
}) => {
  const { colors } = useTheme();
  // const navigation = useNavigation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <SafeArea>
      <CenteredPage>
        {show ? (
          <>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logo}
            />
            <Spacer height={40} />
            <View style={{ justifyContent: "center", width: "100%" }}>
              <CustomText variant="title" style={{ textAlign: "center" }}>
                Welcome to DIURNA
              </CustomText>
              <Spacer height={20} />

              <CustomText variant="body" style={{ textAlign: "center" }}>
                It looks like this is your first time using this app. {"\n"}
                Click on the button below to get you started with some simple
                initial setup.
              </CustomText>
              <Spacer height={40} />
              <TouchableOpacity
                style={[styles.fab, { backgroundColor: colors.primary }]}
                onPress={() =>
                  navigation.navigate("OnboardingCountrySettingsScreen")
                }
              >
                <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
                  Let's Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View />
        )}
      </CenteredPage>
    </SafeArea>
  );
};

export default OnboardingSplashScreen;
