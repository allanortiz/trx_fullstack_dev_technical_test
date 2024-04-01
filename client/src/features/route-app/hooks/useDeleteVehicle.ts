import { Vehicle } from '@/types/Vehicle';
import httpClient from '@/utils/httpClient';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteVehicle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (vehicleId: string) => {
      return await httpClient.delete(`api/vehicles/${vehicleId}`, {});
    },
    onSuccess: (data, id) => {
      queryClient
        .getQueryCache()
        .findAll({ queryKey: ['vehicles'] })
        .forEach(({ queryKey }) => {
          queryClient.setQueryData(queryKey, (old: any) => {
            const index = old.data.findIndex((vehicle: Vehicle) => vehicle.id === id);
            const data = { ...old };

            if (index !== -1) {
              delete data.data[index];
            }

            return { ...data };
          });
        });
    },
  });
}
