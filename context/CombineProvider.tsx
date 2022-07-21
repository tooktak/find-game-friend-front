/* eslint-disable react/display-name */
import { ReactNode } from 'react';

type Provider = ({ children }: { children: ReactNode }) => JSX.Element;

const CombineProvider = (components: Provider[]) =>
  components.reduce(
    (AccProvider, CurProvider) =>
      ({ children }: { children: ReactNode }) =>
        (
          <AccProvider>
            <CurProvider>{children}</CurProvider>
          </AccProvider>
        ),
    ({ children }: { children: ReactNode }) => <>{children}</>,
  );

export default CombineProvider;
