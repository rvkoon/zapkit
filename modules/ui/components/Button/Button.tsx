import { MouseEvent, ReactNode } from "react";
import cx from "classnames";

type ButtonTypes = "button" | "submit";
export interface IButtonProps {
  content: string | ReactNode;
  onClick?: () => void;
  className?: string;
  type?: ButtonTypes;
  disabled?: boolean;
  testId?: string;
  id?: string;
}

export function Button({
  content,
  onClick,
  className,
  type = "button",
  disabled,
  testId,
  id,
}: IButtonProps): JSX.Element {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  }

  return (
    <button
      id={id}
      type={type}
      className={cx(
        "min-h-4 py-1 px-2 bg-primary-blue hover:bg-primary-blue-light text-white font-bold text-[14px] rounded-base",
        disabled && "pointer-none opacity-30",
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testId}
    >
      {content}
    </button>
  );
}
