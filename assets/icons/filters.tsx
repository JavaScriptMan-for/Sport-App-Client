import Svg, { Line, Circle } from "react-native-svg";

export const FiltersIcon = ({ color = "black", size = 24 }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Верхняя линия */}
    <Line x1="3" y1="6" x2="21" y2="6" stroke={color} strokeWidth={2} />
    <Circle cx="8" cy="6" r="2" fill={color} />

    {/* Средняя линия */}
    <Line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth={2} />
    <Circle cx="16" cy="12" r="2" fill={color} />

    {/* Нижняя линия */}
    <Line x1="3" y1="18" x2="21" y2="18" stroke={color} strokeWidth={2} />
    <Circle cx="12" cy="18" r="2" fill={color} />
  </Svg>
);
