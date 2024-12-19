import { View, TextInput, StyleSheet } from 'react-native';

import { GLOBAL_STYLES } from '../../constants/styles';

function CustomTextInput({ 
    value, onChangeText, placeholder = "", isPassword = false, containerStyle, textInputStyle, handleError }){
      return (
          <View style={[styles.inputContainer, containerStyle]}>
              <TextInput
                  style={[styles.input, textInputStyle]}
                  value={value}
                  onChangeText={onChangeText}
                  placeholder={placeholder}
                  placeholderTextColor={GLOBAL_STYLES.colors.grey100}
                  secureTextEntry={isPassword}
                  autoCapitalize="none"
                  keyboardType={placeholder.includes("Email") ? 'email-address' : 'default'}
                  onFocus={handleError}
              />
          </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: GLOBAL_STYLES.colors.white,
    borderRadius: 12, // Default border radius of 12
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5,
  },
  input: {
    fontSize: 16,
    color: GLOBAL_STYLES.colors.white,
    fontFamily: "AfacadFlux-Regular"

  },
});

export default CustomTextInput;
