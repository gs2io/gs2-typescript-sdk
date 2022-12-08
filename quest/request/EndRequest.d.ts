import IRequest from '../../core/interface/IRequest';
import * as Gs2Quest from '../model';
export default class EndRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private transactionId;
    private rewards;
    private isComplete;
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
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getRewards(): Gs2Quest.Reward[] | null;
    setRewards(rewards: Gs2Quest.Reward[] | null): this;
    withRewards(rewards: Gs2Quest.Reward[] | null): this;
    getIsComplete(): boolean | null;
    setIsComplete(isComplete: boolean | null): this;
    withIsComplete(isComplete: boolean | null): this;
    getConfig(): Gs2Quest.Config[] | null;
    setConfig(config: Gs2Quest.Config[] | null): this;
    withConfig(config: Gs2Quest.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EndRequest;
    toDict(): {
        [key: string]: any;
    };
}
