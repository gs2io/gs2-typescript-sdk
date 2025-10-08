import IRequest from '../../core/interface/IRequest';
import * as Gs2Mission from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private missionCompleteScript;
    private counterIncrementScript;
    private receiveRewardsScript;
    private completeNotification;
    private logSetting;
    private queueNamespaceId;
    private keyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTransactionSetting(): Gs2Mission.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Mission.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Mission.TransactionSetting | null): this;
    getMissionCompleteScript(): Gs2Mission.ScriptSetting | null;
    setMissionCompleteScript(missionCompleteScript: Gs2Mission.ScriptSetting | null): this;
    withMissionCompleteScript(missionCompleteScript: Gs2Mission.ScriptSetting | null): this;
    getCounterIncrementScript(): Gs2Mission.ScriptSetting | null;
    setCounterIncrementScript(counterIncrementScript: Gs2Mission.ScriptSetting | null): this;
    withCounterIncrementScript(counterIncrementScript: Gs2Mission.ScriptSetting | null): this;
    getReceiveRewardsScript(): Gs2Mission.ScriptSetting | null;
    setReceiveRewardsScript(receiveRewardsScript: Gs2Mission.ScriptSetting | null): this;
    withReceiveRewardsScript(receiveRewardsScript: Gs2Mission.ScriptSetting | null): this;
    getCompleteNotification(): Gs2Mission.NotificationSetting | null;
    setCompleteNotification(completeNotification: Gs2Mission.NotificationSetting | null): this;
    withCompleteNotification(completeNotification: Gs2Mission.NotificationSetting | null): this;
    getLogSetting(): Gs2Mission.LogSetting | null;
    setLogSetting(logSetting: Gs2Mission.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Mission.LogSetting | null): this;
    /** @deprecated */
    getQueueNamespaceId(): string | null;
    /** @deprecated */
    setQueueNamespaceId(queueNamespaceId: string | null): this;
    /** @deprecated */
    withQueueNamespaceId(queueNamespaceId: string | null): this;
    /** @deprecated */
    getKeyId(): string | null;
    /** @deprecated */
    setKeyId(keyId: string | null): this;
    /** @deprecated */
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
