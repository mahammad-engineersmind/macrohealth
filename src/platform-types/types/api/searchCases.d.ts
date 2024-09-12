export interface SearchCasesHeader {
    'mh-lookupFieldsOr'?: string;
    'mh-caseLookupFields'?: string;
    'mh-caseLookupFieldsOr'?: string;
    'mh-caseLookupFieldsLike'?: string;
    'mh-caseStatuses'?: string;
    'mh-caseStatusesLike'?: string;
    'mh-fromTimestamp'?: string;
    'mh-toTimestamp'?: string;
    'mh-latestOnly'?: string;
    'mh-totalCount'?: string;
    'mh-sortOn'?: string;
    'page-number'?: string;
    limit?: string;
    token?: string;
}
