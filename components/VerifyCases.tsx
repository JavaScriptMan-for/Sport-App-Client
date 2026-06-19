import { FC, useRef, useState } from "react";
import { View, TextInput, StyleSheet, Animated } from "react-native";
import { useAppDispatch } from "../store/store";
import { setFinalNumber } from "../store/app.reducer";

const VerifyCases: FC = () => {
  const dispatch = useAppDispatch()
  const [values, setValues] = useState(["", "", "", "", ""]);

  const inputs = useRef<TextInput[]>([]);
  const animations = useRef(values.map(() => new Animated.Value(0))).current;

  const handleChange = (text: string, index: number) => {
    const newValues = [...values];
    newValues[index] = text.replace(/[^0-9]/g, "");
    setValues(newValues);

  if (newValues.every(v => v.length === 1)) {
    const finally_number = Number(newValues.join(""))
    if(isNaN(finally_number)) return
    dispatch(setFinalNumber(finally_number))
  }

    if (text && index < inputs.current.length - 1 && !isNaN(Number(text))) {
      inputs.current[index + 1].focus();
    }

    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  

  const handleFocus = (index: number) => {
    Animated.timing(animations[index], {
      toValue: -4, 
      duration: 150,
      useNativeDriver: true,
    }).start();
  };


  return (
    <View style={styles.container}>
      {values.map((v, i) => (
        <Animated.View
          key={i}
          style={{ transform: [{ translateY: animations[i] }]}}
        >
          <TextInput
            ref={(ref) => {
              inputs.current[i] = ref!;
            }}
            value={v}
            onChangeText={(text) => handleChange(text, i)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.input}
            onFocus={() => handleFocus(i)}
          />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(130, 0, 28)',
    textAlign: "center",
    fontSize: 24,
  },
});

export default VerifyCases;
