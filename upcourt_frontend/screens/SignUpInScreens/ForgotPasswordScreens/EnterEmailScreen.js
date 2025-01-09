import { View, Text, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { GLOBAL_STYLES } from "../../../constants/styles.js";
import CustomButton from "../../../components/UI_Components/CustomButton.js";
import CustomTextInput from "../../../components/UI_Components/CustomTextInput";
import BasketballLoadingIcon from "../../../components/UI_Components/BasketballLoadingIcon.js";

function EnterEmailScreen({ route }) {
    const { gradientColors } = route.params;
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    function modifyEmail(info) {
        setEmail(info)
    }

    async function emailVerfication() {
        setIsLoading(true)
        try {
            /* 
                Here we will look for the email in the database. 
                Send a verfication code to the email if found, otherwise
                send an error that the email has not been found along with an
                alert of it 
            */
            console.log({
                email
            })
            // Navigate to EmailVerficationScreen allowed
            navigation.navigate("Email Verfication Screen", {
                gradientColors: gradientColors
            })
        } catch (error) {
            Alert.alert(
                "Email Not Found!",
                "The email to the user was not found or your network may not be working. Try another email or again later.",
                [
                    {
                        text: "OK"
                    }
                ]
            )
        } finally {
            setIsLoading(false)
        }
    }

    function checkEmailInput() {
        if (email.length === 0 || !email.includes("@")) {
            setEmailError(true)
            Alert.alert(
                "Invalid Input",
                "Please check your information. Your password or username/email is incorrect.",
                [
                    {
                        text: "OK",
                    }
                ]
            )
        }
        else {
            emailVerfication()
        }
        
    }

    if (isLoading) {
        return (
            <View style={styles.page}>
                <LinearGradient 
                    colors={[GLOBAL_STYLES.colors.blue700, GLOBAL_STYLES.colors.grey300]}
                    style={styles.background}
                />
                <BasketballLoadingIcon />
            </View>
        )   
    }


    return (
        <View style={styles.page}>
            <LinearGradient 
                colors={gradientColors}
                style={styles.background}
            />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        Enter Email
                    </Text>
                </View>
                <View>
                    <CustomTextInput 
                        value={email}
                        onChangeText={modifyEmail}
                        placeholder={"Email..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: emailError ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            emailError && setEmailError(false)
                        }}
                        maxLength={100}
                    />
                </View>
                <CustomButton
                        title="Continue"
                        onPress={checkEmailInput}
                        style={styles.button}
                        textStyle={styles.buttonText} 
                />
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

export default EnterEmailScreen;