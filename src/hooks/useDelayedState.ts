import React from "react";
import { useEffect, useState } from "react";

const useDelayedState = <T>(
  initialValue: T,
  delay: number
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initialValue);
  const [delayedValue, setDelayedValue] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [delayedValue, setValue];
};

export default useDelayedState;
