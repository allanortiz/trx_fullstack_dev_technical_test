import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { renderToStaticNodeStream } from 'react-dom/server';
import { CgSpinner } from 'react-icons/cg';

const COLOR_MAPPING = {
  default: 'bg-slate-300 text-gray-800 hover:bg-slate-400',
  primary: 'bg-primary text-white hover:bg-indigo-950',
  secondary: 'bg-secondary text-white',
  danger: 'bg-gray-700 text-red-500 hover:bg-red-600 hover:text-white',
};

const SPIN_COLOR_MAPPING = {
  default: 'text-gray-800',
  primary: 'text-white',
  secondary: 'text-white',
  danger: 'text-red-500 group-hover:text-white',
};

type ButtonProps = {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  isStrong?: boolean;
  isUppercase?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type' | 'disabled'>;

export const Button = ({
  children,
  color = 'default',
  isStrong = false,
  isUppercase = false,
  isLoading = false,
  type = 'button',
  ...rest
}: ButtonProps): JSX.Element => {
  const classes = clsx(
    'group rounded-lg px-6 py-3 transition-all duration-200 ease-in-out tracking-wider',
    COLOR_MAPPING[color],
    isStrong && 'font-bold',
    isUppercase && 'uppercase',
    isLoading && 'opacity-50 cursor-not-allowed flex flex-row flex-wrap'
  );

  return (
    <button type={type} {...rest} className={classes}>
      {isLoading && (
        <CgSpinner className={clsx('w-6 h-6 mr-2 animate-spin', !!color ? SPIN_COLOR_MAPPING[color] : 'text-white')} />
      )}

      {children}
    </button>
  );
};
