import { CaseFileCase, FhirSearchResponse } from '../../../types';

export declare enum FileDirection {
    In = "In",
    Out = "Out"
}
export interface ProcessedFile {
    FileName?: string;
    FileType?: string;
    CreatedOn?: string;
    direction?: FileDirection;
    party?: string;
    enrollmentCount?: number;
    claimCount?: number;
    authCount?: number;
    Status?: string;
    fileLength?: number;
    caseFileId?: string;
    source?: 'fhir' | 'mongo';
}
export declare function formatDirection(direction: string): FileDirection | undefined;
export declare function processMongoSearchResults(searchResults?: Array<CaseFileCase>): Array<ProcessedFile>;
export declare function processFileExplorerResults(cases: Array<CaseFileCase>, fhrResponse: FhirSearchResponse): Array<ProcessedFile>;
