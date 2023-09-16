import IRequest from '../../core/interface/IRequest';
import * as Gs2AdReward from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private admob;
    private unityAd;
    private changePointNotification;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getAdmob(): Gs2AdReward.AdMob | null;
    setAdmob(admob: Gs2AdReward.AdMob | null): this;
    withAdmob(admob: Gs2AdReward.AdMob | null): this;
    getUnityAd(): Gs2AdReward.UnityAd | null;
    setUnityAd(unityAd: Gs2AdReward.UnityAd | null): this;
    withUnityAd(unityAd: Gs2AdReward.UnityAd | null): this;
    getChangePointNotification(): Gs2AdReward.NotificationSetting | null;
    setChangePointNotification(changePointNotification: Gs2AdReward.NotificationSetting | null): this;
    withChangePointNotification(changePointNotification: Gs2AdReward.NotificationSetting | null): this;
    getLogSetting(): Gs2AdReward.LogSetting | null;
    setLogSetting(logSetting: Gs2AdReward.LogSetting | null): this;
    withLogSetting(logSetting: Gs2AdReward.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
