export interface FileExpectation {
    id: string;
    integrationId: string;
    name: string;
    workstream: string;
    party: string;
    stepNumber: number;
    direction: string;
    expectedFrequency: string;
    timeZone: string;
    sftpFolder: string;
    filePattern: string;
    consequence: string;
    numberOfFiles: number;
    disabled: boolean;
}
export declare enum ExpectationResult {
    Green = "GREEN",
    Red = "RED",
    Grey = "GREY",
    Yellow = "YELLOW",
    Disabled = "DISABLED"
}
export interface FileExpectationMatch {
    status: string;
    direction: string;
    createdOn: string;
    sftpFolder: string;
    fileName: string;
    caseFileId: string;
    customerId: string;
    integrationId: string;
}
export interface FileExpectationCheck {
    fileExpectation: FileExpectation;
    expectationResult: ExpectationResult;
    matches: Array<FileExpectationMatch>;
}
