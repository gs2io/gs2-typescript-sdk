import IRequest from '../../core/interface/IRequest';
import * as Gs2Inbox from '../model';
export default class ReadMessageByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private messageName;
    private config;
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
    getMessageName(): string | null;
    setMessageName(messageName: string | null): this;
    withMessageName(messageName: string | null): this;
    getConfig(): Gs2Inbox.Config[] | null;
    setConfig(config: Gs2Inbox.Config[] | null): this;
    withConfig(config: Gs2Inbox.Config[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReadMessageByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}