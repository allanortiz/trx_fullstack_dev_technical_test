import { Vehicle } from "@/types/Vehicle";

type VehicleFormProps = {
  defaultValues?: Vehicle;
  onSubmit: (values: Vehicle) => void;
  onCancel: () => void;
};

export const VehicleForm = ({}: VehicleFormProps): JSX.Element => {
  return <div>VehicleForm</div>;
};
