import { BsFillCheckCircleFill } from 'react-icons/bs';
import Typography from '../basic/Typography';
import Modal from '../basic/Modal';
import { Button } from '../basic/Button';

type ConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
  description?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
};

const ConfirmModal = ({
  open,
  onClose,
  onCancel,
  onConfirm,
  description,
  children,
  isLoading,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Aceptar',
}: ConfirmModalProps): JSX.Element => {
  return (
    <Modal open={open} size="sm" onClose={onClose}>
      {!!description && (
        <Typography as="h3" fontWeight="medium" fontSize="2xl" className="mb-8">
          {description}
        </Typography>
      )}

      {!!children && <div className="mb-8">{children}</div>}

      <div className="flex justify-between">
        <Button onClick={onCancel}>{cancelLabel}</Button>

        <Button onClick={onConfirm} disabled={isLoading} isLoading={isLoading} color="primary">
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
