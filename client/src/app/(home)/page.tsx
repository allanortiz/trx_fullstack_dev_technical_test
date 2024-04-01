'use client';

import { PAGE_SIZE } from '@/data/constants';
import { RoutesAppPage, useCreateVehicle, useDeleteVehicle, useUpdateVehicle, useVehicles } from '@/features/route-app';
import { UseVehicleProps } from '@/features/route-app/hooks/useVehicles';
import { Callback } from '@/types/Callback';
import { Vehicle } from '@/types/Vehicle';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Home() {
  const [vehicleListOptions, setVehicleListOptions] = useState<UseVehicleProps>({
    page: 1,
    size: PAGE_SIZE,
    filter: '',
  });
  const { data: vehiclesData, isPending: isLoadingVehicles } = useVehicles(vehicleListOptions);
  const { mutate: createVehicle, isPending: isCreatingVehicle } = useCreateVehicle();
  const { mutate: updateVehicle, isPending: isUpdatingVehicle } = useUpdateVehicle();
  const { mutate: deleteVehicle, isPending: isDeletingVehicle } = useDeleteVehicle();

  const vehicles = vehiclesData?.data || [];

  const overwriteVehicleListOptions = (options: UseVehicleProps) => {
    setVehicleListOptions((oldOptions) => ({ oldOptions, ...options }));
  };

  const handleCreateVehicle = async (vehicle: Vehicle, { onSuccess }: Callback) => {
    createVehicle(vehicle, {
      onError: (error) => toast.error(error.message),
      onSuccess: () => {
        toast.success('Vehículo creado exitosamente');
        onSuccess?.();
      },
    });
  };

  const handleUpdateVehicle = async (vehicle: Vehicle, { onSuccess }: Callback) => {
    updateVehicle(vehicle, {
      onError: (error) => toast.error(error.message),
      onSuccess: (...args) => {
        toast.success('Vehículo actualizado exitosamente');
        onSuccess?.(...args);
      },
    });
  };

  const handleDeleteVehicle = async (vehicleId: string, { onSuccess }: Callback) => {
    deleteVehicle(vehicleId, {
      onError: (error) => toast.error(error.message),
      onSuccess: () => {
        toast.success('Vehículo eliminado exitosamente');
        onSuccess?.();
      },
    });
  };

  return (
    <RoutesAppPage
      vehicles={vehicles}
      createVehicle={handleCreateVehicle}
      updateVehicle={handleUpdateVehicle}
      deleteVehicle={handleDeleteVehicle}
      overwriteVehicleListOptions={overwriteVehicleListOptions}
      isLoadingVehicles={isLoadingVehicles}
      isSavingVehicle={isCreatingVehicle || isUpdatingVehicle || isDeletingVehicle}
    />
  );
}
