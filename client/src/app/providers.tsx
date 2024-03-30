'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;
const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
