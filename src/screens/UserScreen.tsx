import { Button, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../router/routes";


type UserScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "User">
  route: RouteProp<RootStackParamList, "User">
}

export default function UserScreen({
  navigation,
  route
}: UserScreenProps) {
  const { userName } = route.params;
  const navigationToHomeScreen = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Text
        style={{
          marginVertical: 10,
          fontSize: 20,
          fontWeight: 500,
          textAlign: "center",
        }}
      >{userName}</Text>

      <Button
        title="Home"
        onPress={navigationToHomeScreen}
      />
    </View>
  )
}