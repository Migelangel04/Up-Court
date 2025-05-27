import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import SignOnStack from "./navigation/SignOnStack";
import MainTab from './navigation/MainTab';

/* 
  Current Task(s):
  - Set up navigation from sign in page to the other "Forgot Password Screens".
  Currently Implementing screen one (EnterEmailScreen). Need to finish styles and nav from 
  that page.
*/

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
  let isAuth = true; // We replace with actual auth sequence code

  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        {isAuth ? <MainTab /> : <SignOnStack />}
      </NavigationContainer>
    </>
  );
}

