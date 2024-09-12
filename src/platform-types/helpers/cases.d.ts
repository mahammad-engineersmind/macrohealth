import { SearchCasesHeader } from '../types/api/searchCases';

export interface SearchCasesSort {
    Location: string;
    FieldName: string;
    Order: number;
}
export interface SearchCasesRequest {
    mhId?: string;
    networkId?: string;
    payerId?: string;
    authorizationNumber?: string;
    referenceNumber?: string;
    memberId?: string;
    memberName?: string;
    memberDOB?: string;
    direction?: string;
    statuses?: Array<string>;
    fromTimestamp?: string;
    toTimestamp?: string;
    limit?: number;
    token?: string;
    page?: string;
    sortOn?: SearchCasesSort;
    caseFileId?: string;
    docTypes?: Array<string>;
    fileName?: string;
    fileNamePartial?: string;
    statusPartial?: string;
    totalCount?: boolean;
    latestOnly?: boolean;
}
/**
 * This builds a SearchCasesHeader using a SearchCasesRequest object as it's input.
 * It is very opinionated and should only be used if you want to make a search like how the Explorers do.
 *
 * @param request A SearchCasesRequest object that will be transformed into the proper headers.
 * @returns A SearchCasesHeader already built and ready to sent to the API.
 */
export declare function buildSearchCasesHeader(request: SearchCasesRequest): SearchCasesHeader;
