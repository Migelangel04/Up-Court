import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GLOBAL_STYLES } from "../../../constants/styles";
import ScrollViewHelper from "../../../components/ScrollViewHelper";

/*
    Current Tasks:
    - Implement the designs for this page, go off scheme from tablet designs.
    - Similar Auth Token from Sign Up Screen, figure it out and implement it here.
    - Set up the routing for this page.
*/

function SignUpScreen() {
    // Figure out how to 
    return (
        <ScrollViewHelper backgroundColor={"white"}>
            <LinearGradient 
                colors={[GLOBAL_STYLES.colors.blue700, GLOBAL_STYLES.colors.grey300]}
                style={styles.background}
            />
            
        </ScrollViewHelper>
    )
}

const styles = StyleSheet.create({

})

export default SignUpScreen;