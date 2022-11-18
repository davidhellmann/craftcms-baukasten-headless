"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

export const PageTransition = ({
                              children,
                              className,
                            }: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    transition={{ duration: 0.35 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className={classNames("min-h-screenHeightWithoutHeader", className)}
  >
    {children}
  </motion.div>
);
