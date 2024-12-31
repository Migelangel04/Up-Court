import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GLOBAL_STYLES } from "../../../constants/styles";
import ScrollViewHelperWGradient from "../../../components/ScrollViewHelperWGradient";
import CustomTextInput from "../../../components/UI_Components/CustomTextInput";
import CustomButton from "../../../components/UI_Components/CustomButton";

/*
    Current Tasks:
    - Implement the designs for this page, go off scheme from tablet designs.
    - Similar Auth Token from Sign Up Screen, figure it out and implement it here.
    - Set up the routing for this page.
*/

function SignUpScreen() {
    // Figure out how to 
    return (
        <ScrollViewHelperWGradient
            gradientColors={[GLOBAL_STYLES.colors.blue700, GLOBAL_STYLES.colors.grey300]}
        >
            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Sign Up
                    </Text>
                </View>
                <View>
                    <Text style={[styles.inputHeader, true && {
                        color: GLOBAL_STYLES.colors.error300
                    }]}>
                        Email
                    </Text>
                    <CustomTextInput
                        //value={}
                        //onChangeText={}
                        placeholder={"Email..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: true ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            
                        }}
                    />
                </View>
                <View>
                    <Text style={[styles.inputHeader, true && {
                        color: GLOBAL_STYLES.colors.error300
                    }]}>
                        Password
                    </Text>
                    <View>
                        <CustomTextInput
                            //value={accountPassword}
                            //onChangeText={modifyAccountPassword}
                            placeholder={"Password..."}
                            isPassword={true}
                            containerStyle={{
                                borderWidth: 2,
                                borderColor: true ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                            }}
                            handleError={() => {
                                
                            }}
                        />
                    </View>
                </View>
                
                <View style={styles.buttonContainer}>
                    <CustomButton 
                        title="Sign Up"
                        onPress={() => console.log("Sign Up and Login")}
                        textStyle={styles.buttonTextStyle}
                    />
                </View>
            </View>

        </ScrollViewHelperWGradient>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: "10%",
        marginVertical: "25%",
        gap: 20,
        width: "80%",
        flex: 1
    },
    titleContainer: {
        alignSelf: "center"
    },
    title: {
        fontSize: 48,
        textAlign: "center",
        color: GLOBAL_STYLES.colors.white,
        fontFamily: "AfacadFlux-Bold",
    },
    inputHeader: {
        textAlign: 'left',
        fontFamily: "AfacadFlux-Bold",
        fontSize: 24,
        color: "white" 
    },
    forgotPasswordText: {
        fontSize: 16,
        textDecorationLine: "underline",
        color: GLOBAL_STYLES.colors.white,
        fontFamily: "AfacadFlux-Regular"
    },
    buttonContainer: {
        alignSelf: "center",
    },
    buttonTextStyle: {
        fontSize: 24,
        fontFamily: "AfacadFlux-Bold",
        textAlign: "center",
        color: GLOBAL_STYLES.colors.white
    },
})

export default SignUpScreen;