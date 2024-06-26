import IRequest from '../../core/interface/IRequest';
import * as Gs2AdReward from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private admob;
    private unityAd;
    private appLovinMaxes;
    private description;
    private acquirePointScript;
    private consumePointScript;
    private changePointNotification;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getAdmob(): Gs2AdReward.AdMob | null;
    setAdmob(admob: Gs2AdReward.AdMob | null): this;
    withAdmob(admob: Gs2AdReward.AdMob | null): this;
    getUnityAd(): Gs2AdReward.UnityAd | null;
    setUnityAd(unityAd: Gs2AdReward.UnityAd | null): this;
    withUnityAd(unityAd: Gs2AdReward.UnityAd | null): this;
    getAppLovinMaxes(): Gs2AdReward.AppLovinMax[] | null;
    setAppLovinMaxes(appLovinMaxes: Gs2AdReward.AppLovinMax[] | null): this;
    withAppLovinMaxes(appLovinMaxes: Gs2AdReward.AppLovinMax[] | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getAcquirePointScript(): Gs2AdReward.ScriptSetting | null;
    setAcquirePointScript(acquirePointScript: Gs2AdReward.ScriptSetting | null): this;
    withAcquirePointScript(acquirePointScript: Gs2AdReward.ScriptSetting | null): this;
    getConsumePointScript(): Gs2AdReward.ScriptSetting | null;
    setConsumePointScript(consumePointScript: Gs2AdReward.ScriptSetting | null): this;
    withConsumePointScript(consumePointScript: Gs2AdReward.ScriptSetting | null): this;
    getChangePointNotification(): Gs2AdReward.NotificationSetting | null;
    setChangePointNotification(changePointNotification: Gs2AdReward.NotificationSetting | null): this;
    withChangePointNotification(changePointNotification: Gs2AdReward.NotificationSetting | null): this;
    getLogSetting(): Gs2AdReward.LogSetting | null;
    setLogSetting(logSetting: Gs2AdReward.LogSetting | null): this;
    withLogSetting(logSetting: Gs2AdReward.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
