import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState);
  const onToggle = useCallback((state?: boolean) => {
    if (state !== undefined) return setState(state);
    setState(state => !state);
  }, []);
  return [state, onToggle] as const;
};

export default useToggle;
