import { ReactNode } from "react";
import cx from "classnames";

export interface IFieldGroupProps {
  label?: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}

export function FieldGroup({
  label,
  htmlFor,
  children,
  className,
}: IFieldGroupProps): JSX.Element {
  return (
    <div className={cx("flex flex-col gap-1", className)}>
      {label && (
        <label htmlFor={htmlFor} className="pl-1">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}
