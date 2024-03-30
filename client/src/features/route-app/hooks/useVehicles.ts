import httpClient from '@/utils/httpClient';
import { useQuery } from '@tanstack/react-query';

export const useVehicles = () => {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: async () => {
      return await httpClient.get(`/api/vehicles`);
    },
  });
};
