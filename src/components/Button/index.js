import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder10: "rounded-radius10",
  icbRoundedBorder27: "rounded-radius27",
  CircleBorder12: "rounded-radius12",
  RoundedBorder5: "rounded-radius5",
};
const variants = {
  icbFillBluegray52: "bg-bluegray_52",
  icbFillLightblue50: "bg-light_blue_50",
  OutlineBluegray100: "border border-bluegray_100 border-solid text-gray_500",
  FillBlue52: "bg-blue_52 text-blue_A700",
  FillGreen51: "bg-green_51 text-green_300",
  FillOrange50: "bg-orange_50 text-deep_orange_A100",
};
const sizes = { smIcn: "p-[6px]", sm: "pl-[5px] py-[5px]", md: "p-[5px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf([
    "icbRoundedBorder10",
    "icbRoundedBorder27",
    "CircleBorder12",
    "RoundedBorder5",
  ]),
  variant: PropTypes.oneOf([
    "icbFillBluegray52",
    "icbFillLightblue50",
    "OutlineBluegray100",
    "FillBlue52",
    "FillGreen51",
    "FillOrange50",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder5",
  variant: "icbFillBluegray52",
  size: "",
};

export { Button };
