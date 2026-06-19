import * as ImagePicker from "expo-image-picker";
import { FC, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Loader from "./Loader";

interface Props {
  placeholder: string;
  success_pick: (base64: string) => void;
  on_clear?: () => void;
}

const ImageInput: FC<Props> = ({ placeholder, success_pick, on_clear }) => {
  const [avatarBase64, setAvatarBase64] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pickImage = async () => {
    setIsLoading(true);
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setIsLoading(false);
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      const asset = result.assets[0];

      const base64 = asset.base64;
      const mime = asset.mimeType;

      const fullBase64 = `data:${mime};base64,${base64}`;
      setIsLoading(false);
      setAvatarBase64(fullBase64);
      success_pick(fullBase64);

      // сохраняем имя файла (если нет — создаём своё)
      setFileName(asset.fileName ?? `image.${mime?.split("/")[1] ?? "jpg"}`);
    }
  };

  const clearImage = (callback?: () => void) => {
    setAvatarBase64(null);
    setFileName(null);
    callback && callback();
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>{placeholder}</Text>
      </TouchableOpacity>

      {(avatarBase64 || isLoading) && (
        <View style={styles.preview_container}>
          {isLoading ? (
            <View style={styles.loader_container}>
              <Loader showed={true} />
            </View>   
          ) : (
            <>
              <Image
                source={{ uri: avatarBase64! }}
                style={styles.preview_img}
              />
              <Text style={styles.preview_text}>{fileName}</Text>
            </>
          )}
          <TouchableOpacity onPress={() => clearImage(on_clear)}>
            <Text style={styles.remove_btn}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    gap: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    borderColor: "rgb(146, 43, 65)",
    borderWidth: 1,
    borderStyle: "dashed",
    backgroundColor: "transparent",
    padding: 18,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
  preview_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 0,
  },
  preview_img: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  preview_text: {
    fontSize: 16,
    fontWeight: "400",
    flexShrink: 1,
  },
  remove_btn: {
    fontSize: 22,
    color: "black",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  loader_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    borderStyle: 'dashed'
  }
});
