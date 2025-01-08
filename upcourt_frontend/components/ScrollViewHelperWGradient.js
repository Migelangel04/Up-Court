import { LinearGradient } from "expo-linear-gradient";
import { 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform, 
  SafeAreaView,
  StyleSheet
} from "react-native";

function ScrollViewHelperWGradient({ children, gradientColors }) {
  
  return (
    <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
    >
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView
            style={styles.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  scrollContent: {
    flexGrow: 1,
  }
});

export default ScrollViewHelperWGradient;