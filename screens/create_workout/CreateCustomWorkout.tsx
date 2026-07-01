import { FC,  ReactNode,  useMemo, useState, memo } from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CircleIcon from "../../assets/icons/circle";

import { workouts, images } from "../../objects/exercise";
import { useAppSelector } from "../../store/store";

import SearchExercises from "../../components/SearchExercises";

const CreateCustomWorkout: FC = () => {
  const auth_data = useAppSelector((state) => state.app.auth_data);
  const [buttonIds, setButtonIds] = useState<number[]>([])

  const workouts_memo = useMemo(() => workouts, [workouts]);
  const images_memo = useMemo(() => images, [images]);

  const colors = useMemo(() => ['rgb(40, 154, 37)', 'rgb(130, 0, 28)', 'rgb(20, 20, 20)', 'green'], [])

  const open_more_details = (name: string) => {

  }

  const add_exercise = (id: number) => {
    if(buttonIds.includes(id)) {
      setButtonIds(prev => prev.filter(item => item !== id))
    } else {
      setButtonIds(prev => [...prev, id])
    }
  }

  const clear_exercises = () => {
    setButtonIds([])
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
          <View style={styles.exercise_block}>
          <TouchableOpacity style={styles.common_block} onPress={() => open_more_details(item.name)}>
            <Text style={styles.name}>{item.name}</Text>
            <Image style={styles.image} source={images_memo[item.image]} />
            <Text style={styles.place}>{item.place}</Text>
            <View style={styles.groups_muscles}>
              {item.groupMuscles.map((group, index, array) => (
                <View key={`group_${index}`} style={styles.muscles_block}>
                  <CircleIcon color={colors[index]} size={14}/>
                  <Text style={styles.group_muscles}>
                    {`${group}${index !== array.length - 1 ? "," : ""}`}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.scale_block}>
                <Text style={styles.scale_text}>Сложность:</Text>
                <ScaleComponent value={item.difficulty} color="rgb(50, 50, 50)"/>
            </View>
            <View style={styles.scale_block}>
              <Text style={styles.scale_text}>На массу:</Text>
              <ScaleComponent value={item.effectiveness.onMass} color="rgb(131, 5, 31)" />
            </View>
            <View style={styles.scale_block}>
              <Text style={styles.scale_text}>На выносливость:</Text>
              <ScaleComponent value={item.effectiveness.onEndurance} color="rgb(39, 154, 39)"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
           style={
            buttonIds.includes(item.id) ? {...styles.button, backgroundColor: 'grey'} : {...styles.button, backgroundColor: 'rgb(131, 5, 31)'} 
          }
           onPress={() => add_exercise(item.id)}
           
           >
          <Text style={styles.button_text}>{buttonIds.includes(item.id) ? '-' : '+'}</Text>
          </TouchableOpacity>
          </View>
        )}
      />
      <CustomModal show={buttonIds.length > 0}>
        <Text style={styles.modal_title}>Выбрано упражнений:</Text>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <TouchableOpacity onPress={clear_exercises}><Text>✕</Text></TouchableOpacity>
          <Text style={styles.modal_count}>{buttonIds.length}</Text>
        </View>      
      </CustomModal>
    </SafeAreaView>
  );
};

interface ScaleComponentProps {
  value: number;
  color: string;
}

const ScaleComponent: FC<ScaleComponentProps> = memo(({ value, color }) => {
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
                height: '100%',
                borderWidth: 0
            },
            title: {
                fontSize: 18
            }
        })
    }, [value, color])

  return (
        <View style={scale_styles.scale_div}>
            <View style={scale_styles.scale} />
        </View>
  )
});

interface CustomModalProps {
  show: boolean,
  children: ReactNode
}

const CustomModal: FC<CustomModalProps> = ({ show, children }) => {
  return (
    <>
    { show &&
    <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'flex-end' }}>
    <View style={styles.modal}>
      { children }
    </View>
    </View>
    }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    backgroundColor: 'rgb(50, 50, 50)',
    paddingTop: 10,
    paddingBottom: 10,
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
    fontSize: 18,
    fontWeight: 500
  },
  exercise_block: {
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 10,
    width: "50%",
    backgroundColor: 'rgb(222, 224, 224)',
    marginBottom: 5,
  },
  common_block: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10,
    width: "100%",
    minHeight: 200,
    marginBottom: 10,   
  },
  groups_muscles: {
    flexWrap: "wrap",
    alignSelf: "flex-start",
  },
  group_muscles: {
    marginRight: 5,
    textAlign: "center",
    alignSelf: "flex-start",
  },
  muscles_block: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    height: 20
  },
  image: {
    width: '90%',
    height: 200,
    marginTop: 2,
    marginBottom: 5
  },
  scale_block: {
    width: '100%',
    gap: 2
  },
  scale_text: {
    fontSize: 18,
    fontWeight: 500
  },
  button: {
        width: '100%',
        alignItems: 'center',
        padding: 7,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 5,     
    },
    button_text: {
        color: 'white',
        fontSize: 20
    },
    modal: {
      position: 'absolute',
      width: '100%',
      padding: 5,
      height: 50,
      borderRadius: 5,
       backgroundColor: 'rgb(187, 187, 187)',

      marginBottom: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    modal_title: {
      fontSize: 20,
      fontWeight: 500
    },
    modal_count: {
      textAlign: 'center',
      color: 'white',
      fontSize: 18,
      fontWeight: 600,
      backgroundColor: 'red',
      borderRadius: 30,
      padding: 10,
      width: 42,
      height: 42
    }
  });

export default CreateCustomWorkout;
