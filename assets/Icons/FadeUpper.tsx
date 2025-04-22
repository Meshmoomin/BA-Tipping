import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg";
const FadeUpper = (props:SvgProps) => (
  <Svg
    width={181}
    height={121}
    viewBox="0 0 181 121"
    fill="none"
    {...props}
  >
    <Path
      d="M0.5 0.24646H180.5V120.246H0.5V0.24646Z"
      fill="url(#paint0_linear_54748_2124)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_54748_2124"
        x1={90.5}
        y1={0.24646}
        x2={90.5}
        y2={120.246}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" stopOpacity={0} />
        <Stop offset={1} stopColor="white" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default FadeUpper;
