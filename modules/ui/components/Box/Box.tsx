import { ReactNode } from "react";
import cx from "classnames";

export interface IBoxProps {
  children: ReactNode;
  className?: string;
  isStickingSides?: boolean;
}

export function Box({
  children,
  className,
  isStickingSides = false,
}: IBoxProps): JSX.Element {
  return (
    <div className={cx("px-1", isStickingSides && "px-0")}>
      <div className={cx("rounded-base p-base bg-white", className)}>
        {children}
      </div>
    </div>
  );
}
