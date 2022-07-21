import { QueryClient } from 'react-query';

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient();
    return client;
  };
})();

export const QueryKeys = {
  FIND_MATE_POST: 'FIND_MATE_POST',
  MEMBER: 'MEMBER',
  GAME: 'GAME',
};
