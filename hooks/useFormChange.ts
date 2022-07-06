import { ChangeEvent, useCallback, useState } from 'react';

function useFormChange<T>(initialState: T) {
  const [form, setForm] = useState<T>(initialState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value,
    }));
  }, []);

  return [form, onChange] as const;
}

export default useFormChange;
