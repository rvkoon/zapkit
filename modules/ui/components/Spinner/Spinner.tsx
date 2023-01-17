import { Loader } from "react-feather";
import cx from "classnames";

export type TSpinnerSize = "s" | "m" | "l" | "xl";

export interface ISpinnerProps {
  size?: TSpinnerSize;
}

export function Spinner({ size = "m" }: ISpinnerProps): JSX.Element {
  function renderSize() {
    switch (size) {
      case "s":
        return "font-1";
      case "m":
      default:
        return "font-2";
      case "l":
        return "font-3";
      case "xl":
        return "font-4";
    }
  }
  return <Loader className={cx("animate-spin", renderSize())} />;
}
