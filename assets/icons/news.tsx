import { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  focused: boolean;
}

const NewsIcon: FC<Props> = ({ focused }) => {
  const color = focused ? "rgb(130, 0, 28)" : "#9CA3AF";

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M4 5H18C19.1 5 20 5.9 20 7V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V5Z"
        fill={color}
      />
      <Path
        d="M7 9H17V11H7V9Z"
        fill="white"
        opacity={0.35}
      />
      <Path
        d="M7 13H13V15H7V13Z"
        fill="white"
        opacity={0.35}
      />
    </Svg>
  );
};

export default NewsIcon;
