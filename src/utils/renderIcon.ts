import React from "react";

export type IconProp = React.ElementType | React.ReactNode;

const renderIcon = (icon: IconProp, style?: string): React.ReactNode => {
  if (!icon) return null;
  if (typeof icon === "function") {
    return React.createElement(icon as React.ElementType, { className: style });
  }

  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, { className: style } as object);
  }
  return icon as React.ReactNode;
};

export default renderIcon;
