'use client';

// import { MapProvider } from '@/providers/MapProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;
const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <MapProvider>{children}</MapProvider> */}
      {children}
    </QueryClientProvider>
  );
};
