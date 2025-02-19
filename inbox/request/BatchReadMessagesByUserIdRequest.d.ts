import IRequest from '../../core/interface/IRequest';
import * as Gs2Inbox from '../model';
export default class BatchReadMessagesByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private messageNames;
    private config;
    private timeOffsetToken;
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
    getMessageNames(): string[] | null;
    setMessageNames(messageNames: string[] | null): this;
    withMessageNames(messageNames: string[] | null): this;
    getConfig(): Gs2Inbox.Config[] | null;
    setConfig(config: Gs2Inbox.Config[] | null): this;
    withConfig(config: Gs2Inbox.Config[] | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BatchReadMessagesByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
