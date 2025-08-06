import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";


export type RootStackParamList = {
  Home: undefined,
  User: {
    userName: string,
  }
}
const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export default function RoutesStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={HomeScreen}
        />

        <Screen
          name="User"
          component={UserScreen}
        />
      </Navigator>
    </NavigationContainer>
  )
}