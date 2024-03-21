import React from "react";

const sizes = {
  "5xl": "text-7xl font-medium md:text-5xl",
  xs: "text-[10px] font-medium leading-[140%]",
  lg: "text-lg font-medium",
  s: "text-sm font-medium leading-[140%]",
  "2xl": "text-2xl font-medium md:text-[22px]",
  "3xl": "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  "4xl": "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  xl: "text-xl font-normal",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
