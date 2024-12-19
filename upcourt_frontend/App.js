import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { GLOBAL_STYLES } from "./constants/styles";
import WelcomePage from "./screens/SignUpInScreens/WelcomePage";
import SignInScreen from "./screens/SignUpInScreens/SignInScreen/SignInScreen";
import SignUpScreen from "./screens/SignUpInScreens/SignUpScreen/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
 
  const [loaded, error] = useFonts({
    "AfacadFlux-Regular": require('./assets/Afacad_Flux/static/AfacadFlux-Regular.ttf'),
    "AfacadFlux-Bold": require('./assets/Afacad_Flux/static/AfacadFlux-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error){
    return null
  }

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Welcome Page"
            component={WelcomePage}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name = "Sign In Screen"
            component={SignInScreen}
            options={{
              headerTitle: "",
					    headerBackTitleVisible: false,
					    headerTransparent: true,
              headerTintColor: GLOBAL_STYLES.colors.orange300
            }}
          />
          <Stack.Screen
            name = "Sign Up Screen"
            component={SignUpScreen}
            options={{
              headerTitle: "",
					    headerBackTitleVisible: false,
					    headerTransparent: true,
              headerTintColor: GLOBAL_STYLES.colors.orange300
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

