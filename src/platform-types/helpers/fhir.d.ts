import { FhirBundle, FhirEntry, FhirResourceType, PatientFhirResource } from '../types';

export declare enum MemberType {
    Dependent = "Dependent",
    Subscriber = "Subscriber"
}
export interface FhirSearchRequest {
    resourceId?: string;
    memberId?: string;
    memberName?: string;
    memberDateOfBirth?: string;
    memberCoverageCurrency?: string;
    enrollmentRequestCaseFileId?: string;
    identifier?: string;
    fileName?: string;
    fileStatus?: string;
    direction?: string;
    dateFrom?: string;
    dateTo?: string;
    lastUpdatedFrom?: string;
    lastUpdatedTo?: string;
    skip?: number;
    limit?: number;
    totalCount?: boolean;
    sort?: string;
}
export declare enum CoverageState {
    Active = "active",
    Terminated = "terminated",
    Future = "future"
}
/**
 * This builds a query string using a FhirSearchRequest object as it's input.
 * It is very opinionated and should only be used if you want to make a search like how the Explorers do.
 *
 * @param request A FhirSearchRequest object that will be used as the base to build the query.
 * @returns The already formatted query string.
 */
export declare function buildFhirSearchQueryString(request: FhirSearchRequest): string;
export declare function getMemberNameFromPatient(patient: FhirEntry<PatientFhirResource>): string | undefined;
export declare function getMemberTypeFromPatient(patient: FhirEntry<PatientFhirResource>): MemberType | undefined;
export declare function getResourceByType(bundle: FhirBundle, type: FhirResourceType): FhirEntry<import('../types').EnrollmentRequestFhirResource | import('../types').DocumentReferenceFhirResource | PatientFhirResource | import('../types').CoverageFhirResource | import('../types').OrganizationFhirResource> | undefined;
export declare function getResourceByTypeAndId(bundle: FhirBundle, type: FhirResourceType, id: string): FhirEntry<import('../types').EnrollmentRequestFhirResource | import('../types').DocumentReferenceFhirResource | PatientFhirResource | import('../types').CoverageFhirResource | import('../types').OrganizationFhirResource> | undefined;
export declare function getFormattedAddressFromPatient(patient: FhirEntry<PatientFhirResource>): string | undefined;
export declare function getNameFromEntry(entry: FhirEntry): string | undefined;
