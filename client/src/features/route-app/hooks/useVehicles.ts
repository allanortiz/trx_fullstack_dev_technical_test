import { PAGE_SIZE } from '@/data/constants';
import httpClient from '@/utils/httpClient';
import { useQuery } from '@tanstack/react-query';

export type UseVehicleProps = {
  page?: number;
  size?: number;
  filter?: string;
};

export const useVehicles = ({ page = 1, size = PAGE_SIZE, filter = '' }: UseVehicleProps) => {
  return useQuery({
    queryKey: ['vehicles', page, size, filter],
    queryFn: async () => {
      return await httpClient.get(`/api/vehicles?page=${page}&size=${size}&filter=${filter}`);
    },
  });
};
