import classNames from "classnames";
import React from "react";

export const Container = ({
  tag = 'div',
  children,
  className,
}: {
  children: React.ReactNode;
  tag?: string;
  className?: string;
}) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements;

  return (
    <CustomTag className={classNames('container', className)}>
      {children}
    </CustomTag>
  )
};
