export declare enum FlowStatus {
    DEPLOYED = "DEPLOYED",
    SOURCES_RUNNING = "SOURCES_RUNNING",
    UNDEPLOYED = "UNDEPLOYED",
    DEPLOYING = "DEPLOYING",
    UNDEPLOYING = "UNDEPLOYING"
}
export interface Flow {
    criticalFlow: boolean;
    integrationId: string;
    lastUpdated: string;
    name: string;
    onDemand: boolean;
    readOnly: boolean;
    status: FlowStatus;
    _id: string;
}
