import httpClient from '@/utils/httpClient';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteVehicle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (vehicleId: string) => {
      return await httpClient.delete(`api/vehicles/${vehicleId}`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
    },
  });
}
