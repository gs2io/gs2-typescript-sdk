import IRequest from '../../core/interface/IRequest';
export default class DescribeMissionTaskModelsRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private missionGroupName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getMissionGroupName(): string | null;
    setMissionGroupName(missionGroupName: string | null): this;
    withMissionGroupName(missionGroupName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMissionTaskModelsRequest;
    toDict(): {
        [key: string]: any;
    };
}
