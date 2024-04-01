import httpClient from '@/utils/httpClient';
import { Vehicle } from '@/types/Vehicle';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateVehicle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Vehicle) => {
      return await httpClient.put(`api/vehicles/${data.id}`, { ...data });
    },
    onSuccess: (data, variables) => {
      queryClient
        .getQueryCache()
        .findAll({ queryKey: ['vehicles'] })
        .forEach(({ queryKey }) => {
          queryClient.setQueryData(queryKey, (old: any) => {
            const index = old.data.findIndex((vehicle: Vehicle) => vehicle.id === variables.id);

            old.data[index] = variables;

            return { ...old };
          });
        });
    },
  });
}
