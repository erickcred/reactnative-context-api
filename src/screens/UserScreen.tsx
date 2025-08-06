import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function UserScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>UserScreen</Text>

      <Button
        title="Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}