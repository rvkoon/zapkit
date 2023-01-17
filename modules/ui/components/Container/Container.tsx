import { ReactNode } from "react";
import cx from "classnames";

export interface IContainerProps {
  isWide?: boolean;
  children: ReactNode;
}

export function Container({
  isWide = false,
  children,
}: IContainerProps): JSX.Element {
  return (
    <div
      className={cx(
        "w-full md:w-container m-auto",
        isWide && "w-containerWide"
      )}
    >
      {children}
    </div>
  );
}
