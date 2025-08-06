import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        title="User"
        onPress={() => navigation.navigate("User")}
      />
    </View>
  )
}