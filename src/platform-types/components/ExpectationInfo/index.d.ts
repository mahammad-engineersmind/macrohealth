import { FileExpectationCheck, FileExpectationMatch } from '../../types';

interface ExpectationInfoProps {
    check: FileExpectationCheck;
    omitName?: boolean;
    onClickMatch?: (caseFileId: string, fileName: string, customerId: string, integrationId: string) => void;
    onRequestPreviousMatches?: (expectationCheck: FileExpectationCheck, date: Date) => () => void;
    previousMatches?: Array<FileExpectationMatch>;
    date: Date;
}
declare const ExpectationInfo: ({ check, omitName, onClickMatch, onRequestPreviousMatches, previousMatches, date }: ExpectationInfoProps) => import("react/jsx-runtime").JSX.Element;
export default ExpectationInfo;
