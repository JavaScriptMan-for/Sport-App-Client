import { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  focused: boolean;
}

const ProfileIcon: FC<Props> = ({ focused }) => {
  const color = focused ? "rgb(130, 0, 28)" : "#9CA3AF";

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill={color}
      />
      <Path
        d="M4 20C4 16.6863 7.13401 14 12 14C16.866 14 20 16.6863 20 20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V20Z"
        fill={color}
      />
    </Svg>
  );
};

export default ProfileIcon;
