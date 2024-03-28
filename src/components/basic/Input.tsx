import React, {
  InputHTMLAttributes,
  forwardRef,
  ReactElement,
  ChangeEvent,
} from "react";

import clsx from "clsx";

type ExposedNativeInputProps =
  | "placeholder"
  | "type"
  | "value"
  | "disabled"
  | "readOnly"
  | "onPaste"
  | "onKeyDown"
  | "onKeyPress"
  | "onChange"
  | "maxLength"
  | "min"
  | "autoComplete"
  | "name"
  | "required"
  | "defaultValue"
  | "pattern";

export type InputProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  startContent?: ReactElement;
  endContent?: ReactElement;
  isInvalid?: boolean;
  isError?: boolean;
  error?: string | any;
  label?: string;
  placeholder?: string;
  type?: string;
  hint?: string;
  mask?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      fullWidth = false,
      startContent,
      disabled,
      endContent,
      label,
      error,
      placeholder,
      isError,
      isInvalid,
      type,
      hint,
      readOnly,
      defaultValue,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {!!label && (
          <label
            className={`ml-1 text-sm  ${
              disabled ? "text-gray-300" : "text-gray-800"
            }`}
          >
            {label}
          </label>
        )}

        <div
          className={clsx(
            "flex flex-row items-center rounded-full border-2 text-gray-800 bg-gray-200 hover:border-primary",
            fullWidth && "w-full",
            // !isInvalid && variant === "normal" && "border-gray-300",
            // isInvalid && COLOR_BORDER_CLASSES.error,
            (disabled || readOnly) &&
              "border-gray-300 bg-gray-300 text-gray-400 hover:border-gray-300",
            // !disabled && !readOnly && "bg-white",
            (error || isError) && "border-danger"
          )}
        >
          {!!startContent && (
            <div className="inline-flex justify-center items-center pl-3 pr-2">
              {startContent}
            </div>
          )}

          <input
            type={type}
            ref={ref}
            {...props}
            placeholder={placeholder}
            className={clsx(
              "w-full rounded-full border-none bg-transparent placeholder:text-xs placeholder:text-gray-800 placeholder:font-bold focus:outline-none py-2 px-1",
              fullWidth && "w-full",
              !startContent && "pl-4",
              !endContent && "pr-4"
            )}
            defaultValue={defaultValue}
            readOnly={disabled || readOnly}
          />

          <div className="flex">
            {!!endContent && (
              <div className="inline-flex justify-center items-center pl-2 pr-3">
                {endContent}
              </div>
            )}
          </div>
        </div>

        {/* {!!error && <div className="my-1 text-sm text-danger">{error}</div>} */}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
