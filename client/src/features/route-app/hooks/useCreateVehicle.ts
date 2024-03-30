import { Vehicle } from '@/types/Vehicle';
import httpClient from '@/utils/httpClient';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateVehicle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Vehicle) => {
      return await httpClient.post(`api/vehicles`, { ...data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
    },
  });
}
