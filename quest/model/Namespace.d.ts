import IModel from '../../core/interface/IModel';
import TransactionSetting from './TransactionSetting';
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';
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
    getTransactionSetting(): TransactionSetting | null;
    setTransactionSetting(transactionSetting: TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: TransactionSetting | null): this;
    getStartQuestScript(): ScriptSetting | null;
    setStartQuestScript(startQuestScript: ScriptSetting | null): this;
    withStartQuestScript(startQuestScript: ScriptSetting | null): this;
    getCompleteQuestScript(): ScriptSetting | null;
    setCompleteQuestScript(completeQuestScript: ScriptSetting | null): this;
    withCompleteQuestScript(completeQuestScript: ScriptSetting | null): this;
    getFailedQuestScript(): ScriptSetting | null;
    setFailedQuestScript(failedQuestScript: ScriptSetting | null): this;
    withFailedQuestScript(failedQuestScript: ScriptSetting | null): this;
    getLogSetting(): LogSetting | null;
    setLogSetting(logSetting: LogSetting | null): this;
    withLogSetting(logSetting: LogSetting | null): this;
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
