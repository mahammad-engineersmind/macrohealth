export interface LifecycleStageDeployment {
    deploymentType: string;
    group: string;
    id: string;
    locator: string;
}
export interface LifecycleStage {
    deployments: Array<LifecycleStageDeployment>;
    id: string;
    integrationId: string;
    name: string;
    stage: number;
}
export interface Lifecycle {
    id: string;
    name: string;
    stages: Array<LifecycleStage>;
}
