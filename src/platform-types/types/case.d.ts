export type CaseType = 'Claims' | 'CaseFile' | 'Authorizations';
export type FileSource = 'mongo' | 'fhir';
export interface StatusHistoryItem {
    Status: string;
    ModifiedOn: string;
    CausedBy?: string;
    FlowID: string;
}
export interface CaseDocument {
    ID: string;
    Body: {
        metadata: {
            schema: string;
            'segment-warnings': Array<any>;
        };
        data: {};
    };
    CaseFileReferenceId?: string;
    Status: string;
    StatusHistory: Array<StatusHistoryItem>;
    CreatedOn: string;
    LookupFields: {
        [fieldName: string]: string;
    };
}
export interface CaseBase {
    CreatedOn: string;
    Documents: {
        [docType: string]: Array<CaseDocument>;
    };
    ID: string;
    ModifiedOn: string;
    Status: string;
    StatusHistory: Array<StatusHistoryItem>;
}
export interface CaseFileCase extends CaseBase {
    LookupFields: {
        destinationFileName?: string;
        Direction: string;
        FileLength: number;
        FileName: string;
        FileType?: string;
        FileFormat?: string;
        totalItemCount?: string;
        Party?: string;
    };
}
export interface CaseClaims extends CaseBase {
    LookupFields: {
        mhId?: string;
        networkId?: string;
        payerId?: string;
    };
}
export interface CaseAuthorization extends CaseBase {
    LookupFields: {
        patientType: string;
        authorizationNumber: string;
        referenceNumber: string;
        memberId: string;
        memberName: string;
        memberDOB: string;
    };
}
export type Case<T extends CaseType> = T extends 'Claims' ? CaseClaims : T extends 'CaseFile' ? CaseFileCase : T extends 'Authorizations' ? CaseAuthorization : never;
export interface CaseSearchResponse<T extends CaseType> {
    Cases: Array<Case<T>>;
    Count: number;
    Token?: string;
    TotalCount?: number;
}
interface CaseProperties {
    LookupFields: Array<{
        FieldName: string;
    }>;
    Statuses: Array<{
        StatusName: string;
    }>;
}
export interface IntegrationSchema {
    CaseMapping: {
        [caseType: string]: {
            CaseDocuments: {
                [docType: string]: CaseProperties;
            };
            CaseProperties: CaseProperties;
        };
    };
    CreatedOn: string;
    CustomerId: string;
}
export {};
