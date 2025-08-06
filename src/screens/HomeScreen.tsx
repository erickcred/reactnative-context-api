import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../router/routes";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [userName, setUserName] = useState("");

  const navigateToUserscreen = () => {
    if (userName)
      navigation.navigate("User", { userName: userName });
  }

  return (
    <View>
      <TextInput
        style={{
          marginVertical: 10,
          borderWidth: 1,
          borderColor: "#9e9e9e"
        }}
        placeholder="Digite o seu nome..."
        onChangeText={(text) => setUserName(text)}
        value={userName}
      />

      <Button
        title="User"
        onPress={navigateToUserscreen}
      />
    </View>
  )
}