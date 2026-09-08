import IRequest from '../../core/interface/IRequest';
import * as Gs2AdReward from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private transactionSettingV2;
    private admob;
    private unityAd;
    private appLovinMaxes;
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
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    /** @deprecated */
    getTransactionSetting(): Gs2AdReward.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2AdReward.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2AdReward.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2AdReward.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2AdReward.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2AdReward.TransactionSettingV2 | null): this;
    getAdmob(): Gs2AdReward.AdMob | null;
    setAdmob(admob: Gs2AdReward.AdMob | null): this;
    withAdmob(admob: Gs2AdReward.AdMob | null): this;
    getUnityAd(): Gs2AdReward.UnityAd | null;
    setUnityAd(unityAd: Gs2AdReward.UnityAd | null): this;
    withUnityAd(unityAd: Gs2AdReward.UnityAd | null): this;
    getAppLovinMaxes(): Gs2AdReward.AppLovinMax[] | null;
    setAppLovinMaxes(appLovinMaxes: Gs2AdReward.AppLovinMax[] | null): this;
    withAppLovinMaxes(appLovinMaxes: Gs2AdReward.AppLovinMax[] | null): this;
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
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
