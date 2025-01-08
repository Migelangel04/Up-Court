import { Text, Pressable, StyleSheet, View } from "react-native";

import Ionicons from "@expo//vector-icons/Ionicons";
import { GLOBAL_STYLES } from "../../constants/styles";


function CustomButton({
    title = "",
    onPress,
    disabled = false,
    style,
    textStyle,
    isIcon = false,
    icon = "",
    iconColor = "#fff"
}){
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({pressed}) => [
                styles.button,
                style,
                pressed ? styles.pressed : null,
                disabled && styles.disabled
            ]}
        >
            {
                isIcon ?  
                <View style={styles.content}>
                    <Ionicons 
                        name={icon}
                        size={20}
                        color={iconColor}
                    />
                </View> 
                :
                <View style={styles.content}>
                    <Text style={textStyle}>
                        {title}
                    </Text>
                </View>
            }
            
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: GLOBAL_STYLES.colors.orange300,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        transition: 'background-color 0.1s',
    },
    pressed: {
        transform: [{ scale: 0.98 }]
    },
    disabled: {
        backgroundColor: GLOBAL_STYLES.colors.grey100
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },

})

export default CustomButton;