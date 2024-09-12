import { MemberType } from '../../fhir';
import { CoverageFhirResource, FhirBundle, FhirEntry, FhirSearchResponse, PatientFhirResource } from '../../../types';

export interface ProcessedEligibility {
    enrollmentId: string;
    enrollmentCurrent: string;
    memberId?: string;
    memberName?: string;
    memberType?: string;
    coverageStart?: string;
    coverageEnd?: string;
}
export declare function processEligibilityExplorerResults(fhirResponse: FhirSearchResponse): Array<ProcessedEligibility>;
export declare function processEnrollmentRequestBundle(bundle: FhirBundle): {
    memberName: string | undefined;
    memberId: string | undefined;
    memberType: MemberType | undefined;
    memberDateOfBirth: string;
    address: string | undefined;
    coveragePeriod: string;
    payors: (FhirEntry<import('../../../types').EnrollmentRequestFhirResource | import('../../../types').DocumentReferenceFhirResource | PatientFhirResource | CoverageFhirResource | import('../../../types').OrganizationFhirResource> | undefined)[];
};
