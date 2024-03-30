import { Vehicle } from '@/types/Vehicle';
import httpClient from '@/utils/httpClient';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateVehicle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Vehicle) => {
      return await httpClient.put(`api/vehicle/${data.id}`, { ...data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
    },
  });
}
