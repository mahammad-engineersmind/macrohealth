import { FileExpectationRequest } from '../../../helpers';
import { FileExpectation, FileExpectationCheck, FileExpectationMatch } from '../../../types';

interface ExpectationDetailsModalProps {
    show: boolean;
    onCloseModal: () => void;
    expectation?: FileExpectationCheck;
    fileExpectations?: Array<FileExpectation>;
    timeZones: Array<string>;
    onSave?: (integrationId: string, expectationId: string, values: FileExpectationRequest) => Promise<void>;
    allowEdit: boolean;
    onClickMatch?: (caseFileId: string, fileName: string, customerId: string, integrationId: string) => void;
    onRequestPreviousMatches?: (expectationCheck: FileExpectationCheck, date: Date) => () => void;
    previousMatches?: Array<FileExpectationMatch>;
    date: Date;
}
declare const ExpectationDetailsModal: ({ show, onCloseModal, expectation, fileExpectations, timeZones, onSave, allowEdit, onClickMatch, onRequestPreviousMatches, previousMatches, date }: ExpectationDetailsModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default ExpectationDetailsModal;
