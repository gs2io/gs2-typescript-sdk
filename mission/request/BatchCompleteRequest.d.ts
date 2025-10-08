import IRequest from '../../core/interface/IRequest';
import * as Gs2Mission from '../model';
export default class BatchCompleteRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private missionGroupName;
    private accessToken;
    private missionTaskNames;
    private config;
    private duplicationAvoider;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getMissionTaskNames(): string[] | null;
    setMissionTaskNames(missionTaskNames: string[] | null): this;
    withMissionTaskNames(missionTaskNames: string[] | null): this;
    getConfig(): Gs2Mission.Config[] | null;
    setConfig(config: Gs2Mission.Config[] | null): this;
    withConfig(config: Gs2Mission.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BatchCompleteRequest;
    toDict(): {
        [key: string]: any;
    };
}
