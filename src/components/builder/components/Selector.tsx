import React, { Children, cloneElement } from "react";
import type { HTMLProps } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface OptionProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  value?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  tooltip?: string;
}
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
        className={`p-2 border rounded-md border-neutral-300 hover:border-neutral-500 cursor-pointer ${
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
  label?: string;
  name: string;
}
const Selector = ({ children, className, label, name }: SelectorProps) => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label htmlFor={name} className="text-center w-full">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <div
              className={
                "flex flex-row w-full items-center justify-center gap-4" +
                  " " +
                  className || ""
              }
            >
              {Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;
                return cloneElement(child as React.ReactElement<OptionProps>, {
                  onClick: () => field.onChange(child.props.value),
                  active: child.props.value == field.value,
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
