import clsx from 'clsx';
import { Button } from '@/components/basic/Button';
import { Vehicle } from '@/types/Vehicle';
import { BsChevronLeft } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { DetailItem } from '../basic/DetailItem';
import Typography from '@/components/basic/Typography';

type VehicleDetailProps = {
  vehicle: Vehicle;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  hasPadding?: boolean;
};

export const VehicleDetail = ({
  vehicle,
  onClose,
  onEdit,
  onDelete,
  hasPadding = true,
}: VehicleDetailProps): JSX.Element => {
  const {
    license_plate,
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
    <div className={clsx('flex-grow', hasPadding && 'p-8')}>
      <div className="flex flex-row justify-between">
        <div>
          <BsChevronLeft className="w-8 h-8 cursor-pointer text-primary" onClick={onClose} />
        </div>

        <div>
          <MdModeEdit className="w-8 h-8 cursor-pointer text-primary" onClick={onEdit} />
        </div>
      </div>

      <Typography as="h2" className="my-4 text-center" fontWeight="bold" fontSize="2xl">
        {license_plate || ''}
      </Typography>

      <div className="flex flex-col gap-2 px-8 mt-8 text-2xl">
        <DetailItem label="Placa" value={license_plate ?? ''} />
        <DetailItem label="Número Económico" value={economic_number ?? ''} />
        <DetailItem label="VIM" value={vim ?? ''} />
        <DetailItem label="Asientos" value={String(seats)} />
        <DetailItem label="Seguro" value={insurance ?? ''} />
        <DetailItem label="Número de Seguro" value={insurance_number ?? ''} />
        <DetailItem label="Marca" value={brand ?? ''} />
        <DetailItem label="Modelo" value={model ?? ''} />
        <DetailItem label="Año" value={String(year)} />
        <DetailItem label="Color" value={color ?? ''} />
      </div>

      <div className="grid w-full my-8 place-items-center">
        <Button color="danger" isStrong onClick={onDelete}>
          Eliminar
        </Button>
      </div>
    </div>
  );
};
