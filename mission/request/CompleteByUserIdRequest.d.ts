import IRequest from '../../core/interface/IRequest';
import * as Gs2Mission from '../model';
export default class CompleteByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private missionGroupName;
    private missionTaskName;
    private userId;
    private config;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getConfig(): Gs2Mission.Config[] | null;
    setConfig(config: Gs2Mission.Config[] | null): this;
    withConfig(config: Gs2Mission.Config[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CompleteByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}