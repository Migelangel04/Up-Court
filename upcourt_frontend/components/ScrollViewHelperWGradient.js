import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";

function ScrollViewHelperWGradient({ children, gradientColors }) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
            behavior="padding"
            keyboardVerticalOffset={100}
        >
            <LinearGradient
                colors={gradientColors}
                style={styles.background}
            />
            <ScrollView style={{ flex: 1 }}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
})

export default ScrollViewHelperWGradient;