import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
};
const variants = {
  outline: {
    gray_400: "border-gray-400 border border-solid text-gray-400",
  },
  fill: {
    white_A700: "bg-white-A700 text-teal-900",
    teal_900: "bg-teal-900 text-white-A700",
  },
};
const sizes = {
  sm: "h-[64px] px-[35px] text-lg",
  xs: "h-[40px] px-[22px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "teal_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer font-medium ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_400", "white_A700", "teal_900"]),
};

export { Button };
