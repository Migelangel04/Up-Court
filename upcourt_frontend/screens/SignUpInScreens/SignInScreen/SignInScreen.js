import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GLOBAL_STYLES } from "../../../constants/styles";
import CustomTextInput from "../../../components/UI_Components/CustomTextInput";
import CustomButton from "../../../components/UI_Components/CustomButton";


function SignInScreen({}) {

    return (
        <View style={styles.page}>
            <LinearGradient 
                colors={[GLOBAL_STYLES.colors.blue700, GLOBAL_STYLES.colors.grey300]}
                style={styles.background}
            />
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Text>

                    </Text>
                    <CustomTextInput />
                </View>
                <View style={styles.inputContainer}>
                    <Text>
                        
                    </Text>
                    <CustomTextInput />
                </View>
                <View>
                    <CustomButton />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    page: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    inputContainer: {

    },
    buttonContainer: {
        
    }
})

export default SignInScreen;