import IRequest from '../../core/interface/IRequest';
import * as Gs2Inbox from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private isAutomaticDeletingEnabled;
    private transactionSetting;
    private receiveMessageScript;
    private readMessageScript;
    private deleteMessageScript;
    private receiveNotification;
    private logSetting;
    private queueNamespaceId;
    private keyId;
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
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
