import { Button, Image, Text, View } from "react-native";
import { BtnNavigation, Container, ContainerSplash, LogoNu } from "./style";

import { useFonts } from "expo-font";
import { IProps } from "../../../@types/tipagem";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export default function ModelInitial({ navigation }: IProps) {
  const { user, loading, error }: any = useContext(AuthContext);

  if (user) {
    return navigation.navigate("Home");
  }
 
  const [fontsLoaded] = useFonts({
    Poppins: require("../../Fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  return (
    <Container>
      <LogoNu source={require("../../assets/logo.png")} />
      <BtnNavigation onPress={() => navigation.navigate("singIn")} >
        <Text
          style={{
            fontFamily: "Poppins",
            color: "white",
            fontSize: 15,
          }}
        >
          COMEÇAR
        </Text>
      </BtnNavigation>
    </Container>
  );
}
