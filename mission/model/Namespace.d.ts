import IModel from '../../core/interface/IModel';
import * as Gs2Mission from '../../mission/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private transactionSetting;
    private missionCompleteScript;
    private counterIncrementScript;
    private receiveRewardsScript;
    private completeNotification;
    private logSetting;
    private createdAt;
    private updatedAt;
    private queueNamespaceId;
    private keyId;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null): string | null;
    getNamespaceId(): string | null;
    setNamespaceId(namespaceId: string | null): this;
    withNamespaceId(namespaceId: string | null): this;
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
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
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
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Namespace | null;
    toDict(): {
        [key: string]: any;
    };
}
