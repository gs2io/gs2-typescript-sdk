import IRequest from '../../core/interface/IRequest';
import * as Gs2Inbox from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private isAutomaticDeletingEnabled;
    private receiveMessageScript;
    private readMessageScript;
    private deleteMessageScript;
    private queueNamespaceId;
    private keyId;
    private receiveNotification;
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
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getIsAutomaticDeletingEnabled(): boolean | null;
    setIsAutomaticDeletingEnabled(isAutomaticDeletingEnabled: boolean | null): this;
    withIsAutomaticDeletingEnabled(isAutomaticDeletingEnabled: boolean | null): this;
    getReceiveMessageScript(): Gs2Inbox.ScriptSetting | null;
    setReceiveMessageScript(receiveMessageScript: Gs2Inbox.ScriptSetting | null): this;
    withReceiveMessageScript(receiveMessageScript: Gs2Inbox.ScriptSetting | null): this;
    getReadMessageScript(): Gs2Inbox.ScriptSetting | null;
    setReadMessageScript(readMessageScript: Gs2Inbox.ScriptSetting | null): this;
    withReadMessageScript(readMessageScript: Gs2Inbox.ScriptSetting | null): this;
    getDeleteMessageScript(): Gs2Inbox.ScriptSetting | null;
    setDeleteMessageScript(deleteMessageScript: Gs2Inbox.ScriptSetting | null): this;
    withDeleteMessageScript(deleteMessageScript: Gs2Inbox.ScriptSetting | null): this;
    getQueueNamespaceId(): string | null;
    setQueueNamespaceId(queueNamespaceId: string | null): this;
    withQueueNamespaceId(queueNamespaceId: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    getReceiveNotification(): Gs2Inbox.NotificationSetting | null;
    setReceiveNotification(receiveNotification: Gs2Inbox.NotificationSetting | null): this;
    withReceiveNotification(receiveNotification: Gs2Inbox.NotificationSetting | null): this;
    getLogSetting(): Gs2Inbox.LogSetting | null;
    setLogSetting(logSetting: Gs2Inbox.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Inbox.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}