import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState);
  const onToggle = useCallback(() => setState(state => !state), []);
  return [state, onToggle] as const;
};

export default useToggle;
