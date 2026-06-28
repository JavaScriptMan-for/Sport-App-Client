import { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  focused: boolean;
}

const StatisticsIcon: FC<Props> = ({ focused }) => {
  const color = focused ? "rgb(130, 0, 28)" : "#9CA3AF";

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M5 14C5 13.4477 5.44772 13 6 13H8C8.55228 13 9 13.4477 9 14V19C9 19.5523 8.55228 20 8 20H6C5.44772 20 5 19.5523 5 19V14Z"
        fill={color}
      />
      <Path
        d="M10.5 10C10.5 9.44772 10.9477 9 11.5 9H13.5C14.0523 9 14.5 9.44772 14.5 10V19C14.5 19.5523 14.0523 20 13.5 20H11.5C10.9477 20 10.5 19.5523 10.5 19V10Z"
        fill={color}
      />
      <Path
        d="M16 6C16 5.44772 16.4477 5 17 5H19C19.5523 5 20 5.44772 20 6V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V6Z"
        fill={color}
      />
    </Svg>
  );
};

export default StatisticsIcon;
