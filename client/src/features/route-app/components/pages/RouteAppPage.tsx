import { Vehicle } from '@/types/Vehicle';
import { Map, Vehicles } from '../..';
import { Callback } from '@/types/Callback';

type RoutesAppPageProps = {
  vehicles: Vehicle[];
  createVehicle: (vehicle: Vehicle, callback: Callback) => void;
  updateVehicle: (vehicle: Vehicle, callback: Callback) => void;
  deleteVehicle: (vehicleId: string, callback: Callback) => void;
  isLoadingVehicles?: boolean;
  isSavingVehicle?: boolean;
};

export const RoutesAppPage = ({
  vehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  isLoadingVehicles,
  isSavingVehicle,
}: RoutesAppPageProps): JSX.Element => {
  return (
    <div className="flex flex-col flex-grow w-full 100vh md:flex-row bg-primary">
      <div className="flex-grow">
        <Map />
      </div>

      <div className="max-md:h-128 md:w-128">
        <Vehicles
          vehicles={vehicles}
          createVehicle={createVehicle}
          updateVehicle={updateVehicle}
          deleteVehicle={deleteVehicle}
          isLoading={isLoadingVehicles}
          isSaving={isSavingVehicle}
        />
      </div>
    </div>
  );
};
