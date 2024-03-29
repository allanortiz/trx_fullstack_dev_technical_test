'use client';

import { Vehicle } from '@/types/Vehicle';
import { VehiclesSkeleton } from '../basic/skeletons/VehiclesSkeleton';
import { VehicleItem } from '../composite/VehicleItem';
import { VehicleDetail } from '../composite/VehicleDetail';
import { ResizeElement } from '../basic/ResizeElement';
import { InputSearch } from '@/components/composite/InputSearch';
import { SiAddthis } from 'react-icons/si';
import { VehicleForm } from '../composite/forms/VehicleForm';
import { useState } from 'react';
import Typography from '@/components/basic/Typography';
import clsx from 'clsx';

type VehicleItemProps = {
  vehicles: Vehicle[];
  isLoading?: boolean;
};

export const Vehicles = ({ vehicles, isLoading }: VehicleItemProps): JSX.Element => {
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

  return (
    <section className="flex flex-col w-full h-full bg-white max-md:rounded-t-2xl md:flex-row md:rounded-l-2xl overflow-auto max-h-screen">
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

        <div className="mb-8 flex flex-row justify-between items-center">
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
            hasPadding={false}
          />
        )}

        {(isNewVehicleVisible || isEditionVehicleVisible) && (
          <VehicleForm
            onSubmit={deselectVehicle}
            onCancel={cancelForm}
            title={isEditionVehicleVisible ? 'Edición de Vehículo' : 'Nuevo Vehículo'}
          />
        )}
      </div>
    </section>
  );
};
