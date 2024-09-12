import { ButtonProps } from '@macrohealth/common-ui';
import { ModalProps } from '..';
import { PropsWithChildren } from 'react';

interface ActionModalProps extends Omit<ModalProps, 'onDismiss'> {
    onClose: () => void;
    title: string;
    buttons: Array<ButtonProps<'button'>>;
}
declare const ActionModal: ({ onClose, title, buttons, children, ...rest }: PropsWithChildren<ActionModalProps>) => import("react/jsx-runtime").JSX.Element;
export default ActionModal;
