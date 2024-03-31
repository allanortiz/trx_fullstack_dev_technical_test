'use client';

import { RoutesAppPage, useCreateVehicle, useDeleteVehicle, useUpdateVehicle, useVehicles } from '@/features/route-app';
import { Callback } from '@/types/Callback';
import { Vehicle } from '@/types/Vehicle';
import toast from 'react-hot-toast';

export default function Home() {
  const { data: vehiclesData, isPending: isLoadingVehicles } = useVehicles();
  const { mutate: createVehicle, isPending: isCreatingVehicle } = useCreateVehicle();
  const { mutate: updateVehicle, isPending: isUpdatingVehicle } = useUpdateVehicle();
  const { mutate: deleteVehicle, isPending: isDeletingVehicle } = useDeleteVehicle();

  const vehicles = vehiclesData?.data || [];

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
      onSuccess: () => {
        toast.success('Vehículo actualizado exitosamente');
        onSuccess?.();
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
      isLoadingVehicles={isLoadingVehicles}
      isSavingVehicle={isCreatingVehicle || isUpdatingVehicle || isDeletingVehicle}
    />
  );
}
