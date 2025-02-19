import IRequest from '../../core/interface/IRequest';
import * as Gs2Inbox from '../model';
export default class BatchReadMessagesRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private messageNames;
    private config;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getMessageNames(): string[] | null;
    setMessageNames(messageNames: string[] | null): this;
    withMessageNames(messageNames: string[] | null): this;
    getConfig(): Gs2Inbox.Config[] | null;
    setConfig(config: Gs2Inbox.Config[] | null): this;
    withConfig(config: Gs2Inbox.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BatchReadMessagesRequest;
    toDict(): {
        [key: string]: any;
    };
}
