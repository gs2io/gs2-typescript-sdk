import IRequest from '../../core/interface/IRequest';
import * as Gs2Exchange from '../model';
export default class AcquireByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private rateName;
    private awaitName;
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
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getAwaitName(): string | null;
    setAwaitName(awaitName: string | null): this;
    withAwaitName(awaitName: string | null): this;
    getConfig(): Gs2Exchange.Config[] | null;
    setConfig(config: Gs2Exchange.Config[] | null): this;
    withConfig(config: Gs2Exchange.Config[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}