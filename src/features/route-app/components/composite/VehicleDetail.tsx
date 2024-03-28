import clsx from "clsx";
import { Button } from "@/components/basic/Button";
import { Vehicle } from "@/types/Vehicle";
import { BsChevronLeft } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { DetailItem } from "../basic/DetailItem";

type VehicleDetailProps = {
  vehicle: Vehicle;
  onClose: () => void;
  hasPadding?: boolean;
};

export const VehicleDetail = ({
  vehicle,
  onClose,
  hasPadding = true,
}: VehicleDetailProps): JSX.Element => {
  const {
    licence_plate,
    economic_number,
    vim,
    seats,
    insurance,
    insurance_number,
    brand,
    model,
    year,
    color,
    // image_url,
  } = vehicle || ({} as any);

  return (
    <div className={clsx("flex-grow", hasPadding && "p-8")}>
      <div className="flex flex-row justify-between">
        <div>
          <BsChevronLeft
            className="w-8 h-8 cursor-pointer text-primary"
            onClick={onClose}
          />
        </div>

        <div>
          <MdModeEdit
            className="w-8 h-8 cursor-pointer text-primary"
            onClick={onClose}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 px-8 mt-8 text-2xl">
        <DetailItem label="Placa" value={licence_plate ?? ""} />
        <DetailItem label="Número Económico" value={economic_number ?? ""} />
        <DetailItem label="VIM" value={vim ?? ""} />
        <DetailItem label="Asientos" value={String(seats)} />
        <DetailItem label="Seguro" value={insurance ?? ""} />
        <DetailItem label="Número de Seguro" value={insurance_number ?? ""} />
        <DetailItem label="Marca" value={brand ?? ""} />
        <DetailItem label="Modelo" value={model ?? ""} />
        <DetailItem label="Año" value={String(year)} />
        <DetailItem label="Color" value={color ?? ""} />
      </div>

      <div className="grid w-full my-8 place-items-center">
        <Button color="danger" isStrong>
          Eliminar
        </Button>
      </div>
    </div>
  );
};
