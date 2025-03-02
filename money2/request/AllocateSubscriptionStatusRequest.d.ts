import IRequest from '../../core/interface/IRequest';
import * as Gs2Money2 from '../model';
export default class AllocateSubscriptionStatusRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private receipt;
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
    getReceipt(): Gs2Money2.Receipt | null;
    setReceipt(receipt: Gs2Money2.Receipt | null): this;
    withReceipt(receipt: Gs2Money2.Receipt | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AllocateSubscriptionStatusRequest;
    toDict(): {
        [key: string]: any;
    };
}
