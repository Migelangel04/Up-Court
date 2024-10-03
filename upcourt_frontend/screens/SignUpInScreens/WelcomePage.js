import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GLOBAL_STYLES } from "../../constants/styles";


function WelcomePage({}) {

    return (
        <View style={styles.page}>
            <LinearGradient 
                colors={[GLOBAL_STYLES.colors.blue700, GLOBAL_STYLES.colors.grey300]}
                style={styles.background}
            />
            <Text style={styles.title}>
                Hello World
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
      },
    title: {
        fontSize: 48,
        textAlign: "center",
        color: GLOBAL_STYLES.colors.white,
        fontFamily: "AfacadFlux-Bold"
    }
})

export default WelcomePage;