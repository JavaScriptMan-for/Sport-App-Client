import { FC } from 'react';
import Svg, { Circle } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const CircleIcon: FC<Props> = ({ size = 24, color = '#000' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke={color}
      strokeWidth={2}
      fill={color}
    />
  </Svg>
);

export default CircleIcon;