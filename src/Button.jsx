import React from "react";
import cn from "classnames";

const Button = ({ className, children, ...props }) => (
  <button
    className={cn(
      "whitespace-nowrap inline-flex rounded-md bg-white py-1.5 px-1.5 text-xs font-semibold uppercase hover:bg-opacity-90",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
