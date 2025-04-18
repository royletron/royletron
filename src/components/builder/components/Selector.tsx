import React, {
  Children,
  cloneElement,
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import type { HTMLProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { classes, classIf } from "~/utils/utils";

export const useIsOverflow = (ref) => {
  const [overFlow, setOverflow] = useState<{
    isOverflow: boolean;
    start: boolean;
    end: boolean;
  }>({
    isOverflow: false,
    start: false,
    end: false,
  });

  const trigger = useCallback(() => {
    if (!ref.current) return;
    const { current } = ref;
    const scrollLeft = current.scrollLeft;
    const scrollWidth = current.scrollWidth;
    const clientWidth = current.clientWidth;
    const isOverflow = scrollWidth > clientWidth;
    const start = scrollLeft <= 0;
    const end = scrollWidth - clientWidth <= scrollLeft;
    setOverflow({ isOverflow, start, end });
  }, [ref]);

  useLayoutEffect(() => {
    const { current } = ref;

    if (current) {
      trigger();
    }
  }, [ref]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      trigger();
    });
    observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      current.addEventListener("scroll", trigger);
    }
    return () => {
      if (current) {
        current.removeEventListener("scroll", trigger);
      }
    };
  }, [ref]);

  return overFlow;
};

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
        className={`p-2 border rounded-md h-full flex flex-col justify-center items-center border-neutral-300 hover:border-neutral-500 cursor-pointer ${
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
  disabled?: string;
}
const Selector = ({
  children,
  className,
  label,
  name,
  disabled,
}: SelectorProps) => {
  const { control } = useFormContext();
  const scroller = useRef<HTMLDivElement>(null);
  const { isOverflow, start, end } = useIsOverflow(scroller);

  return (
    <div
      className={classes(
        "flex flex-col w-full gap-1 relative",
        classIf(disabled != undefined, "tooltip")
      )}
      data-tip={disabled}
    >
      {label && (
        <label
          htmlFor={name}
          className={classes(
            "text-center w-full",
            classIf(disabled != undefined, "opacity-50 pointer-events-none")
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
                "mx-auto max-w-dvw hide-scrollbar overflow-x-auto pb-0.5 -mt-10 pt-10 px-10 flex flex-row items-stretch justify-start gap-4",
                className || "",
                classIf(disabled != undefined, "opacity-50 pointer-events-none")
              )}
              ref={scroller}
            >
              {Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;
                return cloneElement(child as React.ReactElement<OptionProps>, {
                  onClick: () => field.onChange(child.props.value),
                  active: child.props.value == field.value && !disabled,
                  ...child.props,
                });
              })}

              {isOverflow && (
                <>
                  {!start && (
                    <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white from-40% to-white/0 z-10">
                      <a
                        className="h-full"
                        href={`#${name}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scroller.current?.scrollTo({
                            left: Math.max(
                              0,
                              scroller.current.scrollLeft - 240
                            ),
                            behavior: "smooth",
                          });
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                  {!end && (
                    <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white from-40% to-white/0 z-10">
                      <a
                        className="h-full"
                        href={`#${name}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scroller.current?.scrollTo({
                            left: scroller.current.scrollLeft + 240,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default Selector;
