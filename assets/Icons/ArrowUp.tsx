import * as React from "react";
import Svg, { Path, SvgProps } from "../../node_modules/react-native-svg";;
const ArrowUp = (props: SvgProps) => (
  <Svg
    width={49}
    height={51}
    viewBox="0 0 49 51"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.5 48.5399C12.0966 48.5399 2.04169 38.2797 2.04169 25.6232C2.04169 12.9667 12.0966 2.70654 24.5 2.70654C36.9034 2.70654 46.9584 12.9667 46.9584 25.6232C46.9584 38.2797 36.9034 48.5399 24.5 48.5399ZM24.5 44.3732C34.6483 44.3732 42.875 35.9785 42.875 25.6232C42.875 15.2679 34.6483 6.87321 24.5 6.87321C14.3518 6.87321 6.12502 15.2679 6.12502 25.6232C6.12502 35.9785 14.3518 44.3732 24.5 44.3732ZM26.5417 22.3195V36.0399H22.4584V22.3195L17.777 27.0963L14.8897 24.1501L24.5 14.3436L34.1104 24.1501L31.223 27.0963L26.5417 22.3195Z"
      fill="#4F4F4F"
    />
  </Svg>
);
export default ArrowUp;
