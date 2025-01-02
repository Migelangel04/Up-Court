import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { GLOBAL_STYLES } from "../../../constants/styles";
import ScrollViewHelperWGradient from "../../../components/ScrollViewHelperWGradient";
import CustomTextInput from "../../../components/UI_Components/CustomTextInput";
import CustomButton from "../../../components/UI_Components/CustomButton";
import BasketballLoadingIcon from "../../../components/UI_Components/BasketballLoadingIcon";

/*
    Current Tasks:
    - Implement the designs for this page, go off scheme from tablet designs.
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
                        //onChangeText={}
                        placeholder={"First Name..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: informationError.firstName ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            if (informationError.firstName) {
                                setInformationError()
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
                        //onChangeText={}
                        placeholder={"Last Name..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: informationError.lastName ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            
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
                        //onChangeText={}
                        placeholder={"Email..."}
                        isPassword={false}
                        containerStyle={{
                            borderWidth: 2,
                            borderColor: informationError.email ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
                        }}
                        handleError={() => {
                            
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
                            //onChangeText={modifyAccountPassword}
                            placeholder={"Password..."}
                            isPassword={true}
                            containerStyle={{
                                borderWidth: 2,
                                borderColor: informationError.password ? GLOBAL_STYLES.colors.error300 : GLOBAL_STYLES.colors.white
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