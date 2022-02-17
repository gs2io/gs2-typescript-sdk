import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
export default class Message implements IModel {
    private messageId;
    private name;
    private userId;
    private metadata;
    private isRead;
    private readAcquireActions;
    private receivedAt;
    private readAt;
    private expiresAt;
    getMessageId(): string | null;
    setMessageId(messageId: string | null): this;
    withMessageId(messageId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getIsRead(): boolean | null;
    setIsRead(isRead: boolean | null): this;
    withIsRead(isRead: boolean | null): this;
    getReadAcquireActions(): AcquireAction[] | null;
    setReadAcquireActions(readAcquireActions: AcquireAction[] | null): this;
    withReadAcquireActions(readAcquireActions: AcquireAction[] | null): this;
    getReceivedAt(): number | null;
    setReceivedAt(receivedAt: number | null): this;
    withReceivedAt(receivedAt: number | null): this;
    getReadAt(): number | null;
    setReadAt(readAt: number | null): this;
    withReadAt(readAt: number | null): this;
    getExpiresAt(): number | null;
    setExpiresAt(expiresAt: number | null): this;
    withExpiresAt(expiresAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Message | null;
    toDict(): {
        [key: string]: any;
    };
}
