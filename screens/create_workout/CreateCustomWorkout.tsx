import { FC, useMemo } from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { workouts, images } from "../../objects/exercise";
import { useAppSelector } from "../../store/store";

import SearchExercises from "../../components/SearchExercises";

const CreateCustomWorkout: FC = () => {
  const auth_data = useAppSelector((state) => state.app.auth_data);

  const workouts_memo = useMemo(() => workouts, [workouts]);
  const images_memo = useMemo(() => images, [images]);

  const open_more_details = (name: string) => {

  }

  return (
    <SafeAreaView>
      <Text style={styles.appeal_text}>{auth_data?.name}, Вы можете создать свою тренировку</Text>
      <FlatList
        style={styles.container}
        data={workouts_memo}
        keyExtractor={(item) => `block_${item.id}`}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.exercise_block} onPress={() => open_more_details(item.name)}>
            <Text style={styles.name}>{item.name}</Text>
            <Image style={styles.image} source={images_memo[item.image]} />
            <Text style={styles.place}>{item.place}</Text>
            <View style={styles.groups_muscles}>
              {item.groupMuscles.map((group, index, array) => (
                <Text key={`group_${index}`} style={styles.group_muscles}>
                  {`${group}${index !== array.length - 1 ? "," : ""}`}
                </Text>
              ))}
            </View>
            <ScaleComponent value={item.effectiveness.onMass} color="red" title="Для массы:"/>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

interface ScaleComponentProps {
  value: number;
  color: string;
  title: string
}

const ScaleComponent: FC<ScaleComponentProps> = ({ value, color, title }) => {
    const scale_styles = useMemo(() => {
       return StyleSheet.create({
            scale_div: {
                width: '100%',
                height: 15,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'black'
            },
            scale: {
                width: `${value * 10}%`,
                backgroundColor: color,
                height: '100%'
            },
            title: {
                fontSize: 18
            }
        })
    }, [value, color])

  return (
    <View style={{ gap: 5 }}>
        <Text style={scale_styles.title}>{title}</Text>
        <View style={scale_styles.scale_div}>
            <View style={scale_styles.scale} />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 100
  },
  appeal_text: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
  place: {
    textAlign: "left",
    alignSelf: "flex-start",
  },
  exercise_block: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    width: "50%",
    minHeight: 200,
  },
  groups_muscles: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "flex-start",
  },
  group_muscles: {
    marginRight: 5,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  image: {
    width: '90%',
    height: 200,
    marginTop: 2,
    marginBottom: 5
  },
});

export default CreateCustomWorkout;
