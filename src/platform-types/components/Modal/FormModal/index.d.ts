import { ModalProps } from '..';
import { PropsWithChildren } from 'react';

interface FormModalProps extends Omit<ModalProps, 'onDismiss'> {
    handleSubmit: (event?: Partial<Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>>) => Promise<{
        [key: string]: any;
    } | undefined> | undefined;
    submitting: boolean;
    pristine: boolean;
    readonly?: boolean;
    dirty: boolean;
    title?: string;
    submit?: string;
    cancel?: string;
    hideSubmit?: boolean;
    found?: boolean;
    buttons?: Array<JSX.Element>;
    contentClassName?: string;
    onClose: () => void;
    values: any;
    errors: any;
    validating: boolean;
}
declare const FormModal: (props: PropsWithChildren<FormModalProps>) => import("react/jsx-runtime").JSX.Element;
export default FormModal;
