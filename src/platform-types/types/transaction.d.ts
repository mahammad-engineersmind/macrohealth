type ParentRefType = "Mongo-CaseFile" | "FHIR-DocumentReference" | "Trigger";
interface TransactionStatusHistoryItem {
    CausedBy: null;
    FlowID: string;
    ModifiedOn: string;
    Status: string;
}
export interface FailureDetailItem {
    ID: string;
    FailureDumpPath: string;
    Cause: string;
    ShovelOperation: string;
    CreatedOn: string;
}
interface ParentReference {
    ID: string;
    refType: ParentRefType;
}
interface ParentTransaction {
    postCommitId: string;
    transactionId: string;
}
interface Source {
    id: string;
    sourceType: string;
}
export interface Transaction {
    CreatedOn: string;
    CustomerId: string;
    CustomerName: string;
    Description?: string;
    FailureDetail: Array<FailureDetailItem>;
    FlowId: string;
    FlowLegid?: string;
    FlowName: string;
    ID: string;
    InCriticalFlow?: boolean;
    IntegrationId?: string;
    IntegrationName: string;
    LastUpdated: string;
    LifecycleName: string;
    LifecycleStage: string;
    ParentReference?: ParentReference;
    ParentTransaction?: ParentTransaction;
    Source?: Source;
    Status: string;
    StatusHistory?: Array<TransactionStatusHistoryItem>;
}
export interface FetchAllTransactionsResponse {
    Count: number;
    Token?: string;
    TotalCount: number;
    Transactions: Array<Transaction>;
}
export {};
