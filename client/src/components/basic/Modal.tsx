import clsx from 'clsx';
import React, { FC } from 'react';
import { CgCloseO } from 'react-icons/cg';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ModalProps = {
  open: boolean;
  children: React.ReactNode;
  size?: ModalSize;
  hasPadding?: boolean;
  onClose?: () => void;
  hasCloseButton?: boolean;
};

const Modal: FC<ModalProps> = ({ open, size = 'lg', hasPadding = true, children, onClose, hasCloseButton = false }) => {
  if (!open) return null;

  return (
    <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-40 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0" onClick={onClose}>
          <div
            className={clsx(
              'relative w-full w-full transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all',
              size === 'sm' && 'max-w-sm',
              size === 'md' && 'max-w-md',
              size === 'lg' && 'max-w-lg',
              size === 'xl' && 'max-w-xl',
              size === '2xl' && 'max-w-2xl',
              hasPadding && 'p-8'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {hasCloseButton && (
              <button
                className="absolute top-0 right-0 z-60 mt-3 mr-3 flex  cursor-pointer justify-end"
                onClick={onClose}
              >
                <CgCloseO className="text-gray-300" />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
