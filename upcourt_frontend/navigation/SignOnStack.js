import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomePage from "../screens/SignUpInScreens/WelcomePage";
import SignInScreen from "../screens/SignUpInScreens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpInScreens/SignUpScreen/SignUpScreen";
import { GLOBAL_STYLES } from "../constants/styles";

const Stack = createNativeStackNavigator();

export default function SignOnStack() {
    return (
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
    )
}