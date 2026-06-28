import { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  focused: boolean;
}

const CreateWorkoutIcon: FC<Props> = ({ focused }) => {
  const color = focused ? "rgb(130, 0, 28)" : "#9CA3AF";

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        fill={color}
      />
      <Path
        d="M12 7V17"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M7 12H17"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CreateWorkoutIcon;
