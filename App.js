import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Home } from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { FullPost } from "./components/FullPost";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "posts" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPost}
          options={{ title: "post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
