import { Text, Pressable, StyleSheet, View } from "react-native";


function CustomButton({
    title,
    onPress,
    disabled = false,
    style,
    textStyle,
    isIcon = false,
    icon,
    ...props
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
            <View>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        transition: 'background-color 0.1s',
    },
    pressed: {
        transform: [{ scale: 0.98 }]
    },
    disabled: {
        
    }
})

export default CustomButton;