import { View, Text, StyleSheet, Alert, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { GLOBAL_STYLES } from "../../../constants/styles";
import CustomTextInput from "../../../components/UI_Components/CustomTextInput";
import CustomButton from "../../../components/UI_Components/CustomButton";
import BasketballLoadingIcon from "../../../components/UI_Components/BasketballLoadingIcon";

/*
    Current Tasks:
    - Figure out the Auth Token situation and implement it here.
    - Implement and set up "Forgot Password" screen navigations (dw about backend stuff for that rn).
    - Set navigation to app main page.
*/

function SignInScreen({}) {     
    const [accountName, setAccountName] = useState("") // Could be Email or Username
    const [accountPassword, setAccountPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [accountNameError, setAccountNameError] = useState(false)
    const [accountPasswordError, setAccountPasswordError] = useState(false) 

    function modifyAccountName(name){
        setAccountName(name)
    }

    function modifyAccountPassword(password){
        setAccountPassword(password)
    }

    async function fetchUserInformation(data){
        setIsLoading(true)
        try {
            /* 
                Here we will do a get request for our Auth Token.
                We will use Axios to fetch this information and 
                Redux to store the Auth Token. We have to give our data from
                "data". 
            */

        } catch (error) {
            Alert.alert(
                "Invalid Inputs", 
                "Please check your information. Your password or username/email is incorrect.",
                [
                    {
                        text: "OK",
                    }
                ]
            )
        } finally {
            setIsLoading(false)
        }
    }
    
    function signInVerficaton(){
        if (accountName.length === 0 || accountPassword.length === 0){
            accountName.length === 0 && setAccountNameError(true)
            accountPassword.length === 0 && setAccountPasswordError(true)
            Alert.alert(
                "Invalid Inputs", 
                "Please check your information. Your password or username/email is incorrect.",
                [
                    {
                        text: "OK",
                    }
                ]
            )
        }
        else {
            fetchUserInformation({
                accountName: accountName,
                accountPassword: accountPassword
            })
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
                colors={[GLOBAL_STYLES.colors.blue700, GLOBAL_STYLES.colors.grey300]}
                style={styles.background}
            />
            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Sign In
                    </Text>
                </View>
                <View>
                    <Text style={[styles.inputHeader, accountNameError && {
                        color: GLOBAL_STYLES.colors.error300
                    }]}>
                        Username or Email
                    </Text>
                    <CustomTextInput
                        value={accountName}
                        onChangeText={modifyAccountName}
                        placeholder={"Username or Email..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: accountNameError ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            if (accountNameError) {
                                setAccountNameError(false)
                            }
                        }}
                    />
                </View>
                <View>
                    <Text style={[styles.inputHeader, accountPasswordError && {
                        color: GLOBAL_STYLES.colors.error300
                    }]}>
                        Password
                    </Text>
                    <View>
                        <CustomTextInput
                            value={accountPassword}
                            onChangeText={modifyAccountPassword}
                            placeholder={"Password..."}
                            isPassword={true}
                            containerStyle={{
                                borderWidth: 2,
                                borderColor: accountPasswordError ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                            }}
                            handleError={() => {
                                if (accountPasswordError) {
                                    setAccountPasswordError(false)
                                }
                            }}
                        />
                        <Pressable 
                            onPress={() => console.log("Email Verfication Page")}
                            style={{
                                alignSelf: "flex-end"
                            }}
                        >
                            <Text style={styles.forgotPasswordText}>
                                Forgot Password?
                            </Text>
                        </Pressable>
                    </View>
                </View>
                
                <View style={styles.buttonContainer}>
                    <CustomButton 
                        title="Sign In"
                        onPress={signInVerficaton}
                        textStyle={styles.buttonTextStyle}
                    />
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
    page: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
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

export default SignInScreen;