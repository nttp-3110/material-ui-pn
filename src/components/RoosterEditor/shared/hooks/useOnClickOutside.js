
import { useEffect, useCallback, useState } from 'react';

export default function useOnClickOutside(ref, initialIsVisible, disabled, callback) {
  const [clickedOutside, setClickedOutside] = useState(initialIsVisible);
  const handleClickOutside = useCallback(e => {
    if (disabled) {
      return;
    }
    if (!ref.current.contains(e.target)) {
      setClickedOutside(true);
      if (callback) {
        callback();
      }
    }

  }, [callback, disabled, ref]);

  const addEventListener = () => document.addEventListener('mousedown', handleClickOutside);
  const removeEventListener = () => document.removeEventListener('mousedown', handleClickOutside);

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // });

  return { clickedOutside, setClickedOutside, addEventListener, removeEventListener };
}