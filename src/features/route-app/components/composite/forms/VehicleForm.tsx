import { Button } from '@/components/basic/Button';
import Input from '@/components/basic/inputs/Input';
import NumberInput from '@/components/basic/inputs/NumberInput';
import Typography from '@/components/basic/Typography';
import { Vehicle } from '@/types/Vehicle';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type VehicleFormProps = {
  defaultValues?: Vehicle;
  onSubmit: (values: Vehicle) => void;
  onCancel: () => void;
  title?: string;
};

const validationSchema = yup.object().shape({
  licence_plate: yup.string().trim().required('La placa es requerida'),
  economic_number: yup.string().trim().required('El número económico es requerido'),
  vim: yup.string().trim().required('El VIM es requerido'),
  seats: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('El número de asientos es requerido'),
  insurance: yup.string().trim().required('El tipo de seguro es requerido'),
  insurance_number: yup.string().trim().required('El número de seguro es requerido'),
  brand: yup.string().trim().required('La marca es requerida'),
  model: yup.string().trim().required('El modelo es requerido'),
  year: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('El año es requerido')
    .test('test-year', 'El año es inválido', (value) => {
      return value >= 1900 && value <= new Date().getFullYear() + 1;
    }),
  color: yup.string().trim().required('El color es requerido'),
});

export const VehicleForm = ({ title, onCancel, onSubmit }: VehicleFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!!title && (
        <Typography className="mb-8 text-center" as="div" fontWeight="bold" fontSize="2xl">
          {title}
        </Typography>
      )}

      <div className={clsx('flex flex-col gap-4')}>
        <Input
          {...register('licence_plate')}
          label="Placa"
          error={errors.licence_plate?.message}
          placeholder="Ej. ABC-123"
        />

        <Input
          {...register('economic_number')}
          label="Número Económico"
          error={errors.economic_number?.message}
          placeholder="Ej. 123"
        />

        <Input {...register('vim')} label="VIM" error={errors.vim?.message} placeholder="Ej. 123456" />

        <NumberInput
          {...register('seats')}
          label="Asientos"
          placeholder="Ej: 5"
          maxLength={2}
          error={errors?.seats?.message}
        />

        <Input
          {...register('insurance')}
          label="Seguro"
          error={errors.insurance?.message}
          placeholder="Ej. Seguro de daños"
        />

        <Input
          {...register('insurance_number')}
          label="Número de Seguro"
          error={errors.insurance_number?.message}
          placeholder="Ej. 123456"
        />

        <Input {...register('brand')} label="Marca" error={errors.brand?.message} placeholder="Ej. Toyota" />

        <Input {...register('model')} label="Modelo" error={errors.model?.message} placeholder="Ej. Corolla" />

        <NumberInput
          {...register('year')}
          label="Año"
          placeholder="Ej: 2021"
          maxLength={4}
          error={errors?.year?.message}
        />

        <Input {...register('color')} label="Color" error={errors.color?.message} placeholder="Ej. Rojo" />
      </div>

      <div className="flex flex-row justify-between items-center pt-12 pb-12">
        <Button onClick={onCancel}>Cancelar</Button>

        <Button type="submit" color="primary">
          Guardar
        </Button>
      </div>
    </form>
  );
};