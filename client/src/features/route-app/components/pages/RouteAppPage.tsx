import { Vehicle } from '@/types/Vehicle';
import { RoutesMap, Vehicles } from '../..';
import { Callback } from '@/types/Callback';
import { UseVehicleProps } from '../../hooks/useVehicles';
import clsx from 'clsx';
import { useState } from 'react';

type RoutesAppPageProps = {
  vehicles: Vehicle[];
  createVehicle: (vehicle: Vehicle, callback: Callback) => void;
  updateVehicle: (vehicle: Vehicle, callback: Callback) => void;
  deleteVehicle: (vehicleId: string, callback: Callback) => void;
  overwriteVehicleListOptions: (options: UseVehicleProps) => void;
  isLoadingVehicles?: boolean;
  isSavingVehicle?: boolean;
};

export const RoutesAppPage = ({
  vehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  overwriteVehicleListOptions,
  isLoadingVehicles,
  isSavingVehicle,
}: RoutesAppPageProps): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(null as any);

  const handleResize = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col flex-grow w-full 100vh lg:flex-row bg-primary">
      <div className="flex-grow max-lg:-mb-5 lg:-mr-[8px] relative">
        <RoutesMap selectedVehicle={selectedVehicle} />
      </div>

      <div
        className={clsx(
          'relative transition-all duration-300 ease-in-out',
          isCollapsed && 'max-lg:h-8 lg:w-8',
          !isCollapsed && 'max-lg:h-128 lg:w-128'
        )}
      >
        <Vehicles
          vehicles={vehicles}
          selectedVehicle={selectedVehicle}
          selectVehicle={setSelectedVehicle}
          createVehicle={createVehicle}
          updateVehicle={updateVehicle}
          deleteVehicle={deleteVehicle}
          overwriteVehicleListOptions={overwriteVehicleListOptions}
          onResize={handleResize}
          isLoading={isLoadingVehicles}
          isSaving={isSavingVehicle}
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};
