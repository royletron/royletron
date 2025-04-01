import React, { Children, cloneElement } from "react";
import type { HTMLProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { classes, classIf } from "~/utils/utils";

type OptionProps = Omit<HTMLProps<HTMLDivElement>, "value"> & {
  children: React.ReactNode;
  value?: string | number | boolean;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  tooltip?: string;
};
export const Option = ({
  children,
  active,
  onClick,
  className = "",
  tooltip,
  ...props
}: OptionProps) => {
  return (
    <div className={tooltip && "tooltip"} data-tip={tooltip}>
      <div
        className={`p-2 border rounded-md h-full flex items-center border-neutral-300 hover:border-neutral-500 cursor-pointer ${
          active ? "outline-1" : ""
        } ${className}`}
        {...props}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

type Option = React.ReactElement<OptionProps>;
interface SelectorProps {
  children: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  name: string;
  disabled?: boolean;
}
const Selector = ({
  children,
  className,
  label,
  name,
  disabled,
}: SelectorProps) => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label
          htmlFor={name}
          className={classes(
            "text-center w-full",
            classIf(disabled === true, "opacity-50 pointer-events-none")
          )}
        >
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <div
              className={classes(
                "flex flex-row mx-auto max-w-dvw items-stretch justify-start gap-4 hide-scrollbar py-0.5 px-4",
                className || "",
                classIf(disabled === true, "opacity-50 pointer-events-none")
              )}
            >
              {Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;
                return cloneElement(child as React.ReactElement<OptionProps>, {
                  onClick: () => field.onChange(child.props.value),
                  active: child.props.value == field.value && !disabled,
                  ...child.props,
                });
              })}
            </div>
          );
        }}
      />
    </div>
  );
};

export default Selector;
