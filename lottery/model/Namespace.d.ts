import IModel from '../../core/interface/IModel';
import * as Gs2Lottery from '../../lottery/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private transactionSetting;
    private lotteryTriggerScriptId;
    private choicePrizeTableScriptId;
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
    getTransactionSetting(): Gs2Lottery.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Lottery.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Lottery.TransactionSetting | null): this;
    getLotteryTriggerScriptId(): string | null;
    setLotteryTriggerScriptId(lotteryTriggerScriptId: string | null): this;
    withLotteryTriggerScriptId(lotteryTriggerScriptId: string | null): this;
    getChoicePrizeTableScriptId(): string | null;
    setChoicePrizeTableScriptId(choicePrizeTableScriptId: string | null): this;
    withChoicePrizeTableScriptId(choicePrizeTableScriptId: string | null): this;
    getLogSetting(): Gs2Lottery.LogSetting | null;
    setLogSetting(logSetting: Gs2Lottery.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Lottery.LogSetting | null): this;
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
