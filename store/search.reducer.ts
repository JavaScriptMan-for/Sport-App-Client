import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchStateType } from "../types/states.types";
import { Muscles, workouts } from "../objects/exercise";

const initialState: SearchStateType = {
  search_string: "",
  desired_muscles: null,
  desired_place: null,
  desired_difficulty_start: null,
  desired_difficulty_end: null,
  desired_onMass_start: null,
  desired_onMass_end: null,
  desired_endurance_start: null,
  desired_endurance_end: null,

  filtered_workouts: workouts,
};

const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchString(state, actions: PayloadAction<string>) {
      state.search_string = actions.payload;
    },
    setDesiredMuscles(state, actions: PayloadAction<Muscles[]>) {
        state.desired_muscles = actions.payload
    },
    fullFilterExercises(state) {
      //Если фильтры отсутствуют, то возвращаем для state.filtered_workouts начальное значение
      const necessaryKeys = Object.keys(state).filter(
        (key) => key !== "filtered_workouts",
      );

      if (
        necessaryKeys.every((key) => {
          const value = state[key as keyof SearchStateType];

          return value == null || value == "";
        })
      ) {
        state.filtered_workouts = workouts.map(w => w.toJSON());
        return;
      }

      let result = workouts.map(w => w.toJSON());

      //Поиск
      result = result.filter((w) =>
        w.name.toLowerCase().includes(state.search_string.toLowerCase()),
      );
      //Место
      if (state.desired_place) {
        result = result.filter((w) => w.place === state.desired_place);
      }
      //Сложность
      let difficulty_ds = state.desired_difficulty_start;
      let difficulty_de = state.desired_endurance_end;

      if (!difficulty_ds) difficulty_ds = 1;
      if (!difficulty_de) difficulty_de = 10;

      result = result.filter(
        (w) => w.difficulty >= difficulty_ds && w.difficulty <= difficulty_de,
      );

      //На массу
      let on_mass_start = state.desired_onMass_start;
      let on_mass_end = state.desired_onMass_end;

      if(!on_mass_start) on_mass_start = 1
      if(!on_mass_end) on_mass_end = 10

      result = result.filter(w => w.effectiveness.onMass >= on_mass_start && w.effectiveness.onMass <= on_mass_end)

      //На выносливость

      let on_endurance_start = state.desired_endurance_start
      let on_endurance_end = state.desired_endurance_end

      if(!on_endurance_start) on_endurance_start = 1
      if(!on_endurance_end) on_endurance_end = 10

      result = result.filter(w => w.effectiveness.onEndurance >= on_endurance_start && w.effectiveness.onEndurance <= on_endurance_end)

      //Мышцы
      const muscles = state.desired_muscles;

      if (muscles && muscles.length > 0) {
        result = result.filter((w) =>
          muscles.some((m) => w.groupMuscles.includes(m)),
        );
      }
      state.filtered_workouts = result
    },
  },
});

export const { setSearchString, fullFilterExercises } = search.actions;
export default search.reducer;
