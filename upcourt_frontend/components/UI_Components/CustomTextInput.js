import { View, TextInput, StyleSheet } from 'react-native';

function CustomTextInput({ 
    value, onChangeText, placeholder, isPassword, containerStyle }){
    return (
        <View style={[styles.inputContainer, containerStyle]}>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            autoCapitalize="none"
            keyboardType={placeholder === 'Email' ? 'email-address' : 'default'}
        />
        </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12, // Default border radius of 12
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomTextInput;
