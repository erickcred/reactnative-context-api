import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";

const { Navigator, Screen } = createStackNavigator();

export default function RoputeStack() {
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