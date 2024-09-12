import { FileExpectationMatch } from '../../types';

interface ExpectationFileMatchListProps {
    header: string;
    matches: Array<FileExpectationMatch>;
    timeZone: string;
    onClickMatch?: (caseFileId: string, fileName: string, customerId: string, integrationId: string) => void;
}
declare const ExpectationFileMatchList: ({ header, matches, timeZone, onClickMatch }: ExpectationFileMatchListProps) => import("react/jsx-runtime").JSX.Element;
export default ExpectationFileMatchList;
