export type FhirResourceType = 'EnrollmentRequest' | 'DocumentReference' | 'Patient' | 'Coverage' | 'Organization';
interface FhirIdentifier {
    system?: string;
    value?: string;
}
export interface FhirEntry<T extends FhirResourceBase = FhirResource> {
    fullUrl: string;
    resource: T;
}
interface FhirResourceMeta {
    lastUpdated: string;
    profile: Array<string>;
    source: string;
    versionId: string;
}
interface FhirResourceExtensionBase {
    url: string;
}
export interface FhirResourceStringExtension extends FhirResourceExtensionBase {
    valueString: string;
}
export interface FhirResourceDateTimeExtension extends FhirResourceExtensionBase {
    valueDateTime: string;
}
export interface FhirResourceCompositeExtension extends FhirResourceExtensionBase {
    extension: Array<FhirResourceExtension>;
}
export type FhirResourceExtension = FhirResourceCompositeExtension | FhirResourceStringExtension | FhirResourceDateTimeExtension;
export declare function isStringExtension(extension: FhirResourceExtension): extension is FhirResourceStringExtension;
export declare function isDateTimeExtension(extension: FhirResourceExtension): extension is FhirResourceDateTimeExtension;
export declare function isCompositeExtension(extension: FhirResourceExtension): extension is FhirResourceCompositeExtension;
export declare function getFromValueStringExtension(extensions: Array<FhirResourceExtension>, url: string): string | undefined;
interface FhirResourceBase {
    id: string;
    resourceType: FhirResourceType;
    identifier?: Array<FhirIdentifier>;
    meta: FhirResourceMeta;
}
export interface EnrollmentRequestFhirResource extends FhirResourceBase {
    extension: Array<FhirResourceExtension>;
    resourceType: 'EnrollmentRequest';
}
export interface DocumentReferenceFhirResource extends FhirResourceBase {
    date: string;
    extension: Array<FhirResourceExtension>;
    resourceType: 'DocumentReference';
}
export interface PatientFhirResource extends FhirResourceBase {
    address?: Array<{
        line: Array<string>;
        city?: string;
        postalCode?: string;
        state?: string;
    }>;
    birthDate: string;
    extension: Array<FhirResourceExtension>;
    gender: string;
    name: Array<{
        family?: string;
        given: Array<string>;
    }>;
    resourceType: 'Patient';
}
export interface CoverageFhirResource extends FhirResourceBase {
    payor: Array<{
        reference: string;
    }>;
    period: {
        start: string;
        end?: string;
    };
    resourceType: 'Coverage';
}
export interface OrganizationFhirResource extends FhirResourceBase {
    name?: string;
    resourceType: 'Organization';
}
type FhirResource = EnrollmentRequestFhirResource | DocumentReferenceFhirResource | PatientFhirResource | CoverageFhirResource | OrganizationFhirResource;
export declare function isPatientFhirResourceEntry(entry: FhirEntry): entry is FhirEntry<PatientFhirResource>;
export declare function isCoverageFhirResourceEntry(entry: FhirEntry): entry is FhirEntry<CoverageFhirResource>;
export declare function isEnrollmentRequestFhirResourceEntry(entry: FhirEntry): entry is FhirEntry<EnrollmentRequestFhirResource>;
export declare function isOrganizationFhirResourceEntry(entry: FhirEntry): entry is FhirEntry<OrganizationFhirResource>;
export declare function isDocumentReferenceFhirResourceEntry(entry: FhirEntry): entry is FhirEntry<DocumentReferenceFhirResource>;
export interface FhirBundle {
    entry?: Array<FhirEntry>;
    id: string;
    resourceType: 'Bundle';
    total: number;
    type: 'searchset';
}
export type FhirSearchResponse = Array<FhirBundle>;
export {};
