import { useEffect, RefObject } from 'react';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event?: Event) => void,
) => {
  useEffect(() => {
    const pageClickEvent = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', pageClickEvent);

    return () => {
      document.removeEventListener('mousedown', pageClickEvent);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
