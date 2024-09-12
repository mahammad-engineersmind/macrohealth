import { FileExpectationRequest } from '../../helpers';
import { FileExpectation } from '../../types';

export type FileExpectationForm = Omit<FileExpectation, 'disabled'> & {
    disabled: string;
};
interface EditExpectationProps {
    show: boolean;
    onCloseModal: () => void;
    fileExpectation: FileExpectation;
    fileExpectations: Array<FileExpectation>;
    timeZones: Array<string>;
    onSave: (expectationId: string, values: FileExpectationRequest) => Promise<void>;
}
declare const EditExpectation: ({ show, onCloseModal, fileExpectation, fileExpectations, timeZones, onSave }: EditExpectationProps) => import("react/jsx-runtime").JSX.Element | null;
export default EditExpectation;
