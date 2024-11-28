import IModel from '../../core/interface/IModel';
import * as Gs2Inbox from '../../inbox/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private isAutomaticDeletingEnabled;
    private transactionSetting;
    private receiveMessageScript;
    private readMessageScript;
    private deleteMessageScript;
    private receiveNotification;
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
    getIsAutomaticDeletingEnabled(): boolean | null;
    setIsAutomaticDeletingEnabled(isAutomaticDeletingEnabled: boolean | null): this;
    withIsAutomaticDeletingEnabled(isAutomaticDeletingEnabled: boolean | null): this;
    getTransactionSetting(): Gs2Inbox.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Inbox.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Inbox.TransactionSetting | null): this;
    getReceiveMessageScript(): Gs2Inbox.ScriptSetting | null;
    setReceiveMessageScript(receiveMessageScript: Gs2Inbox.ScriptSetting | null): this;
    withReceiveMessageScript(receiveMessageScript: Gs2Inbox.ScriptSetting | null): this;
    getReadMessageScript(): Gs2Inbox.ScriptSetting | null;
    setReadMessageScript(readMessageScript: Gs2Inbox.ScriptSetting | null): this;
    withReadMessageScript(readMessageScript: Gs2Inbox.ScriptSetting | null): this;
    getDeleteMessageScript(): Gs2Inbox.ScriptSetting | null;
    setDeleteMessageScript(deleteMessageScript: Gs2Inbox.ScriptSetting | null): this;
    withDeleteMessageScript(deleteMessageScript: Gs2Inbox.ScriptSetting | null): this;
    getReceiveNotification(): Gs2Inbox.NotificationSetting | null;
    setReceiveNotification(receiveNotification: Gs2Inbox.NotificationSetting | null): this;
    withReceiveNotification(receiveNotification: Gs2Inbox.NotificationSetting | null): this;
    getLogSetting(): Gs2Inbox.LogSetting | null;
    setLogSetting(logSetting: Gs2Inbox.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Inbox.LogSetting | null): this;
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
