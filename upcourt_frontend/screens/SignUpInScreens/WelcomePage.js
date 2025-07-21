import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import { GLOBAL_STYLES } from "../../constants/styles";
import CustomButton from "../../components/UI_Components/CustomButton.js";

function WelcomePage({}) {
    const navigation = useNavigation();

    return (
        <View style={styles.page}>
            <LinearGradient 
                colors={[GLOBAL_STYLES.colors.blue700, GLOBAL_STYLES.colors.grey300]}
                style={styles.background}
            />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        Up Court
                    </Text>
                </View>
                <View>
                    <Text style={styles.description}>
                    Mobile application that helps basketball fans get real time player stats. 
                    Wether it be player versus player or player versus team, this application will 
                    give you well informed information using AI.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton
                         title="Sign Up"
                         onPress={() => navigation.navigate("Sign Up Screen")}
                         style={styles.button}
                         textStyle={styles.buttonText} 
                    />
                    <CustomButton
                         title="Sign In"
                         onPress={() => navigation.navigate("Sign In Screen")}
                         style={styles.button}
                         textStyle={styles.buttonText} 
                    />
                </View>
            </View>
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
    content: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "10%",
        gap: 16
    },
    title: {
        fontSize: 48,
        textAlign: "center",
        color: GLOBAL_STYLES.colors.white,
        fontFamily: "AfacadFlux-Bold"
    },
    description: {
        fontSize: 20,
        textAlign: "center",
        color: GLOBAL_STYLES.colors.white,
        fontFamily: "AfacadFlux-Regular"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        minWidth: "100%"
    },
    button: {
        backgroundColor: GLOBAL_STYLES.colors.orange300
    },
    buttonText: {
        color: GLOBAL_STYLES.colors.white,
        fontFamily: "AfacadFlux-Regular",
        fontSize: 20,
        textAlign: "center"
    }
})

export default WelcomePage;