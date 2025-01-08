import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import { GLOBAL_STYLES } from "../../../constants/styles";
import ScrollViewHelperWGradient from "../../../components/ScrollViewHelperWGradient";
import CustomTextInput from "../../../components/UI_Components/CustomTextInput";
import CustomButton from "../../../components/UI_Components/CustomButton";
import BasketballLoadingIcon from "../../../components/UI_Components/BasketballLoadingIcon";

/*
    Current Tasks:
    - Similar Auth Token from Sign Up Screen, figure it out and implement it here.
    - Set up the routing for this page.
    - Finish up state handling (userInfo and Errors) and information routing **
*/

function SignUpScreen() {
    const [userInformation, setUserInformation] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "" 
    })
    const [isLoading, setIsLoading] = useState(false)
    const [informationError, setInformationError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false
    })
    const navigation = useNavigation();

    function modifyUserInformation(attribute, info) {
        setUserInformation((prevState) => ({
            ...prevState,
            [attribute]: info
        }))
    }

    function modifyUserInformationError(attribute, status) {
        setInformationError((prevState) => ({
            ...prevState,
            [attribute]: status
        }))
    }

    async function createUserAndSignIn() {
        setIsLoading(true)
        try {
            /* 
                Here we will do a get request for our Auth Token.
                We will use Axios to fetch this information and 
                Redux to store the Auth Token. We have to give our data from
                "data". 
            */
            console.log(userInformation)
            navigation.navigate("Welcome Page")
        } catch (error) {
            Alert.alert(
                "Invalid Input",
                "User already exists or there was an error making your account. Check inputs or try again later.",
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

    function signUpVerfication() {
        if (userInformation.firstName.length === 0 || userInformation.lastName.length === 0 ||
            userInformation.email.length === 0 || userInformation.password.length === 0) {
                
            userInformation.firstName.length === 0 && modifyUserInformationError("firstName", true)
            userInformation.lastName.length === 0 && modifyUserInformationError("lastName", true)
            userInformation.email.length === 0 && modifyUserInformationError("email", true)
            userInformation.password.length === 0 && modifyUserInformationError("password", true)
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
            createUserAndSignIn()
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
                    <Text style={[styles.inputHeader, informationError.firstName && {
                        color: GLOBAL_STYLES.colors.error300
                    }]}>
                        First Name
                    </Text>
                    <CustomTextInput
                        value={userInformation.firstName}
                        onChangeText={(info) => modifyUserInformation("firstName", info)}
                        placeholder={"First Name..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: informationError.firstName ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            if (informationError.firstName) {
                                modifyUserInformationError("firstName", false)
                            }
                        }}
                    />
                </View>
                <View>
                    <Text style={[styles.inputHeader, informationError.lastName && {
                        color: GLOBAL_STYLES.colors.error300
                    }]}>
                        Last Name
                    </Text>
                    <CustomTextInput
                        value={userInformation.lastName}
                        onChangeText={(info) => modifyUserInformation("lastName", info)}
                        placeholder={"Last Name..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: informationError.lastName ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            modifyUserInformationError("lastName", false)
                        }}
                    />
                </View>
                <View>
                    <Text style={[styles.inputHeader, informationError.email && {
                        color: GLOBAL_STYLES.colors.error300
                    }]}>
                        Email
                    </Text>
                    <CustomTextInput
                        value={userInformation.email}
                        onChangeText={(info) => modifyUserInformation("email", info)}
                        placeholder={"Email..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: informationError.email ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            modifyUserInformationError("email", false)
                        }}
                    />
                </View>
                <View>
                    <Text style={[styles.inputHeader, informationError.password && {
                        color: GLOBAL_STYLES.colors.error300
                    }]}>
                        Password
                    </Text>
                    <View>
                        <CustomTextInput
                            value={userInformation.password}
                            onChangeText={(info) => modifyUserInformation("password", info)}
                            placeholder={"Password..."}
                            isPassword={true}
                            containerStyle={{
                                borderWidth: 2,
                                borderColor: informationError.password ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                            }}
                            handleError={() => {
                                modifyUserInformationError("password", false)
                            }}
                        />
                    </View>
                </View>
                
                <View style={styles.buttonContainer}>
                    <CustomButton 
                        title="Sign Up"
                        onPress={signUpVerfication}
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
        marginVertical: "5%",
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