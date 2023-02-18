import React from "react";
const variantClasses = {
  h1: "font-semibold text-[9px]",
  h2: "font-bold text-[20px]",
  h3: "font-bold text-[18px]",
  h4: "font-bold text-[17px]",
  h5: "font-bold text-[16px]",
  h6: "font-bold text-[15px]",
  body1: "text-[14px]",
  body2: "font-bold text-[13px]",
  body3: "text-[12px]",
  body4: "font-bold text-[11.58px]",
  body5: "text-[11px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
