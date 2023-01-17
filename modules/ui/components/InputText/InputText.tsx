import cx from "classnames";
import { FieldGroup } from "../FieldGroup";
import { ChangeEvent } from "react";
import _ from "lodash";

export interface IInputTextProps {
  className?: string;
  label?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  value: string;
  error?: string;
}

export function InputText({
  className,
  label,
  name,
  placeholder,
  onChange,
  type,
  value,
  error,
}: IInputTextProps): JSX.Element {
  return (
    <FieldGroup htmlFor={name} label={label}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={cx(
          "min-h-4 bg-primary-blue-extra-light rounded-base py-1 px-2 focus:outline-primary-blue placeholder:text-[14px]",
          error && "shadow-innerCustom shadow-red-200",
          className
        )}
      />
      {error && (
        <p
          className="pl-1 text-red-500 text-[12px]"
          data-testid={`inputText${_.upperFirst(name)}ErrorMessage`}
        >
          {error}
        </p>
      )}
    </FieldGroup>
  );
}
