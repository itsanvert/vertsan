"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

type CounterProps = {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  format?: (n: number) => string;
};

export const NumberTicker = ({
  value,
  className = "",
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
  format,
}: CounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    spring.set(value);
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(parseFloat(latest.toFixed(decimalPlaces)));
    });
    return () => unsubscribe();
  }, [value, decimalPlaces, spring]);

  const formattedValue = format
    ? format(displayValue)
    : displayValue.toFixed(decimalPlaces);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </motion.span>
  );
};
