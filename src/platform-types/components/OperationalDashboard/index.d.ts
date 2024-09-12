import { FileExpectationRequest } from '../../helpers';
import { FileExpectationCheck, FileExpectationMatch } from '../../types';

interface OperationalDashboardProps {
    onChangeDate: (date: Date) => void;
    hideHeader?: boolean;
    expectationCheck: Array<FileExpectationCheck>;
    timeZones: Array<string>;
    onClickMatch?: (caseFileId: string, fileName: string, customerId: string, integrationId: string) => void;
    onRequestPreviousMatches?: (expectationCheck: FileExpectationCheck, date: Date) => () => void;
    previousMatches?: Array<FileExpectationMatch>;
}
interface ReadOnlyOperationalDashboardProps extends OperationalDashboardProps {
    allowEdit: false;
    onSave?: never;
}
interface EditableOperationalDashboardProps extends OperationalDashboardProps {
    allowEdit: true;
    onSave?: (integrationId: string, expectationId: string, values: FileExpectationRequest) => Promise<void>;
}
type Props = ReadOnlyOperationalDashboardProps | EditableOperationalDashboardProps;
export default function OperationalDashboard({ onChangeDate, hideHeader, timeZones, allowEdit, onSave, expectationCheck, onClickMatch, onRequestPreviousMatches, previousMatches }: Props): import("react/jsx-runtime").JSX.Element;
export {};
