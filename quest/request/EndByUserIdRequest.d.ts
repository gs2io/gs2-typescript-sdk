import IRequest from '../../core/interface/IRequest';
import * as Gs2Quest from '../model';
export default class EndByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
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
    }): EndByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
