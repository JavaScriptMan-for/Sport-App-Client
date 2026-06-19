import { FC, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { setImageBase64 } from "../../store/auth.reducer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useAppSelector } from "../../store/store";

import Loader from "../../components/Loader";
import ServerMessage from "../../components/ServerMessage";
import ImageInput from "../../components/ImageInput";

const CreateUserScreen: FC = () => {
  const dispatch = useAppDispatch()
  const base = useAppSelector(state => state.auth.image_base64)

  const [gender, setGender] = useState<"man" | "woman" | "not-chosen">(
    "not-chosen",
  );
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')

  const [purpose, setPurpose] = useState<'minus' | 'plus' | 'not-chosen'>(
    'not-chosen'
  )

  const success_pick = (base64: string): void => {
    dispatch(setImageBase64(base64))
  }
  const on_clear = () => {
    dispatch(setImageBase64(null))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.main_text}>Последний шаг</Text>
      <View style={styles.labels}>
        <Text style={styles.text_labels}>Пол:</Text>
        <View style={styles.selects}>
        <Picker
          selectedValue={gender}
          onValueChange={(value) => setGender(value)}
          style={styles.selects}
        >
          <Picker.Item style={styles.select_text} label="Выбери свой пол" value="not-chosen" enabled={false} />
          <Picker.Item style={styles.select_text} label="Мужской" value="man" />
          <Picker.Item style={styles.select_text} label="Женский" value="woman" />
        </Picker>
        </View>
      </View>
      <View style={styles.labels}>
        <Text style={styles.text_labels}>Рост:</Text>
        <TextInput
         style={styles.inputs}
         keyboardType="numeric"
         placeholder="Введите рост"
         value={height}
         onChangeText={(text) => {
            const onlyNumbs = text.replace(/[^0-9]/g, "");
            setHeight(onlyNumbs);
         }}/>
      </View>
      <View style={styles.labels}>
        <Text style={styles.text_labels}>Вес:</Text>
         <TextInput
          style={styles.inputs}
          placeholder="Введите вес"
          value={weight}
          onChangeText={(text) => {
            const onlyNumbs = text.replace(/[^0-9]/g, "")
            setHeight(onlyNumbs)
          }}
           />
      </View>
      <View style={styles.labels}>
      <Text style={styles.text_labels}>Цель:</Text>
      <View style={styles.selects}>
          <Picker
            selectedValue={purpose}
            onValueChange={(value) => setPurpose(value)}
            style={styles.selects}
          >
            <Picker.Item style={styles.select_text} label="Выбери цель:" value='not-chosen' enabled={false} />
            <Picker.Item style={styles.select_text} label="Похудеть" value='minus' />
            <Picker.Item style={styles.select_text} label="Набрать вес" value='plus' />
          </Picker>
      </View>
      </View>
      <View style={styles.labels}>
          <Text style={styles.text_labels}>Аватар:</Text>
          <ImageInput success_pick={success_pick} on_clear={on_clear} placeholder="Выберите фото"/>
      </View>
      <Text>{base}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
  },
  main_text: {
    fontSize: 30,
    fontWeight: 700,
    textAlign: "center",
  },
  labels: {
    justifyContent: "center",
    gap: 5,
    width: "100%",
  },
  text_labels: {
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 5,
  },
  inputs: {
    borderColor: "#82001c",
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    height: 65,
    fontSize: 20,
    padding: 10,
  },
  selects: {
    borderColor: "#82001c",
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    height: 65,
    fontSize: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  select_text: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: 20,
    borderColor: "black",
    backgroundColor: "rgb(130, 0, 28)",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 5,
    alignItems: "center",
  },
  button_text: {
    color: "white",
    fontSize: 20,
  },
  button_back: {
    width: "100%",
    padding: 20,
    borderColor: "black",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 5,
    alignItems: "center",
  },
  button_back_text: {
    color: "black",
    fontSize: 20,
  },
});

export default CreateUserScreen;
