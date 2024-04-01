import clsx from 'clsx';
import Typography from '@/components/basic/Typography';
import ConfirmModal from '@/components/composite/ConfirmModal';
import { useState } from 'react';
import { Button } from '@/components/basic/Button';
import { Vehicle } from '@/types/Vehicle';
import { BsChevronLeft, BsFillQuestionOctagonFill } from 'react-icons/bs';
import { IoIosWarning } from 'react-icons/io';
import { IoWarningOutline } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md';
import { DetailItem } from '../basic/DetailItem';

type VehicleDetailProps = {
  vehicle: Vehicle;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  hasPadding?: boolean;
  isDeleting?: boolean;
};

export const VehicleDetail = ({
  vehicle,
  onClose,
  onEdit,
  onDelete,
  hasPadding = true,
  isDeleting,
}: VehicleDetailProps): JSX.Element => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

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

  const openConfirmModal = () => setIsConfirmModalOpen(true);

  const closeConfirmModal = () => setIsConfirmModalOpen(false);

  const handleConfirmModal = () => {
    setIsConfirmModalOpen(false);
    onDelete();
  };

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
        <Button color="danger" isStrong onClick={openConfirmModal} isLoading={isDeleting} disabled={isDeleting}>
          Eliminar
        </Button>
      </div>

      <ConfirmModal
        open={isConfirmModalOpen}
        onCancel={closeConfirmModal}
        onConfirm={handleConfirmModal}
        onClose={closeConfirmModal}
        isLoading={false}
      >
        <div className="flex w-full flex-col items-center justify-center gap-8 ">
          <IoIosWarning className="text-5xl text-red-600 w-20 h-20" />

          <Typography as="p" className="text-center text-lg text-gray-700">
            Estás por eliminar el vehículo con número económico <strong>{economic_number ?? ''}</strong> ¿Deseas
            continuar?
          </Typography>
        </div>
      </ConfirmModal>
    </div>
  );
};
