'use client';

import { RoutesAppPage, useCreateVehicle, useDeleteVehicle, useUpdateVehicle, useVehicles } from '@/features/route-app';
import { Vehicle } from '@/types/Vehicle';

export default function Home() {
  const { data: vehiclesData, isLoading } = useVehicles();
  const { mutate: createVehicle } = useCreateVehicle();
  const { mutate: updateVehicle } = useUpdateVehicle();
  const { mutate: deleteVehicle } = useDeleteVehicle();

  const vehicles = (vehiclesData?.data as Vehicle[]) || [];
  // const { mutate } = useUpdateVehicle();
  // const { mutate } = useDeleteVehicle();

  console.log(vehicles);

  return (
    <RoutesAppPage
      vehicles={vehicles}
      createVehicle={createVehicle}
      updateVehicle={updateVehicle}
      deleteVehicle={deleteVehicle}
    />
  );
}
