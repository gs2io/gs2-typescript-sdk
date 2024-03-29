import IRequest from '../../core/interface/IRequest';
export default class GetMissionTaskModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private missionGroupName;
    private missionTaskName;
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
    getMissionTaskName(): string | null;
    setMissionTaskName(missionTaskName: string | null): this;
    withMissionTaskName(missionTaskName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMissionTaskModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
