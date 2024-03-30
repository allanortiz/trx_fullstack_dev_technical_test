import { Vehicle } from '@/types/Vehicle';
import { Map, Vehicles } from '../..';

type RoutesAppPageProps = {
  vehicles: Vehicle[];
  createVehicle: (vehicle: Vehicle) => void;
  updateVehicle: (vehicle: Vehicle) => void;
  deleteVehicle: (vehicleId: string) => void;
};

export const RoutesAppPage = ({
  vehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
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
        />
      </div>
    </div>
  );
};
