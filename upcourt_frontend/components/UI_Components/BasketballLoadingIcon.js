import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { GLOBAL_STYLES } from '../../constants/styles';

function BasketballLoadingIcon() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
      <View style={styles.container}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Icon name="basketball" size={50} color={GLOBAL_STYLES.colors.orange300} />
          </Animated.View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BasketballLoadingIcon;