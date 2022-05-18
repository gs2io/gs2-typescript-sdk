import IRequest from '../../core/interface/IRequest';
import * as Gs2Inbox from '../model';
export default class SendMessageByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private metadata;
    private readAcquireActions;
    private expiresAt;
    private expiresTimeSpan;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getReadAcquireActions(): Gs2Inbox.AcquireAction[] | null;
    setReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[] | null): this;
    withReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[] | null): this;
    getExpiresAt(): number | null;
    setExpiresAt(expiresAt: number | null): this;
    withExpiresAt(expiresAt: number | null): this;
    getExpiresTimeSpan(): Gs2Inbox.TimeSpan | null;
    setExpiresTimeSpan(expiresTimeSpan: Gs2Inbox.TimeSpan | null): this;
    withExpiresTimeSpan(expiresTimeSpan: Gs2Inbox.TimeSpan | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendMessageByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
