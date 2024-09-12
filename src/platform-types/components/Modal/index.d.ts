import { PropsWithChildren } from 'react';

export interface ModalProps {
    isOpen: boolean;
    onDismiss: () => void;
    wide?: boolean;
    tall?: boolean;
}
declare const Modal: ({ isOpen, onDismiss, wide, tall, children }: PropsWithChildren<ModalProps>) => import("react/jsx-runtime").JSX.Element;
export default Modal;
