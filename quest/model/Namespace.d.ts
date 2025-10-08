import IModel from '../../core/interface/IModel';
import * as Gs2Quest from '../../quest/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private transactionSetting;
    private startQuestScript;
    private completeQuestScript;
    private failedQuestScript;
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
    getTransactionSetting(): Gs2Quest.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Quest.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Quest.TransactionSetting | null): this;
    getStartQuestScript(): Gs2Quest.ScriptSetting | null;
    setStartQuestScript(startQuestScript: Gs2Quest.ScriptSetting | null): this;
    withStartQuestScript(startQuestScript: Gs2Quest.ScriptSetting | null): this;
    getCompleteQuestScript(): Gs2Quest.ScriptSetting | null;
    setCompleteQuestScript(completeQuestScript: Gs2Quest.ScriptSetting | null): this;
    withCompleteQuestScript(completeQuestScript: Gs2Quest.ScriptSetting | null): this;
    getFailedQuestScript(): Gs2Quest.ScriptSetting | null;
    setFailedQuestScript(failedQuestScript: Gs2Quest.ScriptSetting | null): this;
    withFailedQuestScript(failedQuestScript: Gs2Quest.ScriptSetting | null): this;
    getLogSetting(): Gs2Quest.LogSetting | null;
    setLogSetting(logSetting: Gs2Quest.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Quest.LogSetting | null): this;
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
