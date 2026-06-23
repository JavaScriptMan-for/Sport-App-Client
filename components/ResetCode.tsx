import { FC, useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFetch } from "../hooks/useFetch";

import { IOnlyMessage } from "../types/request_output.types";
import { IResetCodeInput } from "../types/request_input.types";

interface Props {
  email: string;
  action: "register" | "login";
}

const ResendCode: FC<Props> = ({ email, action }) => {
  const resend_code_fetch = useFetch<IResetCodeInput, IOnlyMessage>(
    "POST",
    "resend-code",
  );

  const [timer, setTimer] = useState<number>(60); //seconds
  const [endTimer, setEndTimer] = useState<boolean>(true);

  const timerFn = () => {
    setEndTimer(false);
      setInterval(() => {
      setTimer((value) => (value -= 1));
    }, 1000);
  };

  useEffect(() => {
    if (timer <= 0) {
      setEndTimer(true);
      setTimer(60)
    }
  }, [timer])

  const onClick = async () => {
    timerFn();

    await resend_code_fetch.send({ email, action });

    if (resend_code_fetch.isError) {
      console.log(resend_code_fetch.isError);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} disabled={!endTimer}>
        <Text style={styles.link_text}>Отправить код заново</Text>
      </TouchableOpacity>
      {!endTimer && <Text>{timer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 5
    },
    link_text: {
        fontSize: 18,
        fontWeight: 600,
        color: "black",
        textDecorationLine: 'underline'
    }
});

export default ResendCode;
