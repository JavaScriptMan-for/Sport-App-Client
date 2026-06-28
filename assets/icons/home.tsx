import { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
    focused: boolean
}

const HomeIcon: FC<Props> = ({ focused }) => {
    return (
     <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          d="M3 12L12 3L21 12H17V21H7V12H3Z"
          fill={focused ? "rgb(130, 0, 28)" : "#9CA3AF"}
        />
      </Svg>
    )
}

export default HomeIcon