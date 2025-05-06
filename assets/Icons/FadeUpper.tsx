import * as React from "react";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from "react-native-svg";
const FadeUpper = (props: SvgProps) => (
  <Svg width={181} height={122} viewBox="0 0 181 122" fill="none" {...props}>
    <Path
      d="M180.5 121.246L0.500015 121.246L0.500004 4.51753e-05L180.5 3.05176e-05L180.5 121.246Z"
      fill="url(#paint0_linear_54748_2114)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_54748_2114"
        x1={90.5}
        y1={121.246}
        x2={90.5}
        y2={0.0000302171}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" stopOpacity={0} />
        <Stop offset={1} stopColor="white" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default FadeUpper;
