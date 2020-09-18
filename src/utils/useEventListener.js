
// Reference: https://usehooks.com/useEventListener/
import { useEffect, useRef } from 'react';

export default function useEventListener(eventName, handler, unmountFunc, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On 
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = event => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        if (unmountFunc) {
          unmountFunc();
        };
        element.removeEventListener(eventName, eventListener);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [eventName, element] // Re-run if eventName or element changes
  );
};