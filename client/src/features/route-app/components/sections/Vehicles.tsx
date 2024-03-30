'use client';

import clsx from 'clsx';
import Typography from '@/components/basic/Typography';
import { useState } from 'react';
import { Vehicle } from '@/types/Vehicle';
import { VehiclesSkeleton } from '../basic/skeletons/VehiclesSkeleton';
import { VehicleItem } from '../composite/VehicleItem';
import { VehicleDetail } from '../composite/VehicleDetail';
import { ResizeElement } from '../basic/ResizeElement';
import { InputSearch } from '@/components/composite/InputSearch';
import { SiAddthis } from 'react-icons/si';
import { VehicleForm } from '../composite/forms/VehicleForm';

type VehicleItemProps = {
  vehicles: Vehicle[];
  createVehicle: (vehicle: Vehicle) => void;
  updateVehicle: (vehicle: Vehicle) => void;
  deleteVehicle: (vehicleId: string) => void;
  isLoading?: boolean;
};

export const Vehicles = ({
  vehicles,
  isLoading,
  createVehicle,
  updateVehicle,
  deleteVehicle,
}: VehicleItemProps): JSX.Element => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(null as any);
  const [isNewVehicleVisible, setIsNewVehicleVisible] = useState(false);
  const [isEditionVehicleVisible, setIsEditionVehicleVisible] = useState(false);

  const showNewVehicle = () => {
    setIsNewVehicleVisible(true);
  };

  const showEditVehicle = () => {
    setIsEditionVehicleVisible(true);
  };

  const cancelForm = () => {
    setIsNewVehicleVisible(false);
    setIsEditionVehicleVisible(false);
  };

  const selectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const deselectVehicle = () => {
    setSelectedVehicle(null as any);
    setIsEditionVehicleVisible(false);
  };

  const saveVehicle = (vehicle: Vehicle) => {
    console.log(vehicle);

    if (isNewVehicleVisible) {
      createVehicle(vehicle);

      return;
    }

    updateVehicle(vehicle);
  };

  return (
    <section className="flex flex-col w-full h-full max-h-screen overflow-auto bg-white max-md:rounded-t-2xl md:flex-row md:rounded-l-2xl">
      {isLoading && <VehiclesSkeleton />}

      <ResizeElement />

      <div
        className={clsx(
          'flex flex-col flex-grow md:pr-8 md:pl-2 max-md:px-8 md:pb-8',
          (selectedVehicle || isNewVehicleVisible) && 'hidden'
        )}
      >
        <Typography as="h2" fontWeight="bold" fontSize="2xl" className="block w-full my-8 text-center">
          Lista de vehículos
        </Typography>

        <div className="flex flex-row items-center justify-between mb-8">
          <InputSearch placeholder="¿Qué vehículo buscas?" onFilterClick={() => {}} />

          <SiAddthis className="text-primary w-[2rem] h-[2rem] cursor-pointer" onClick={showNewVehicle} />
        </div>

        <div className="flex flex-col flex-grow gap-4 overflow-y-auto transition duration-200 ease-out">
          {vehicles.map((vehicle, index) => (
            <VehicleItem key={index} vehicle={vehicle} onSelect={selectVehicle} />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          'duration-200 ease-out transition flex flex-col flex-grow py-8 pr-8',
          !isNewVehicleVisible && !isEditionVehicleVisible && !selectedVehicle && 'hidden'
        )}
      >
        {!!selectedVehicle && !isEditionVehicleVisible && (
          <VehicleDetail
            vehicle={selectedVehicle}
            onClose={deselectVehicle}
            onEdit={showEditVehicle}
            onDelete={() => deleteVehicle(String(selectedVehicle.id))}
            hasPadding={false}
          />
        )}

        {(isNewVehicleVisible || isEditionVehicleVisible) && (
          <VehicleForm
            onSubmit={saveVehicle}
            onCancel={cancelForm}
            title={isEditionVehicleVisible ? 'Edición de Vehículo' : 'Nuevo Vehículo'}
          />
        )}
      </div>
    </section>
  );
};
