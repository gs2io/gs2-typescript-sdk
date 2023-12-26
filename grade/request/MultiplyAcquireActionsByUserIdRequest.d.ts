import IRequest from '../../core/interface/IRequest';
import * as Gs2Grade from '../model';
export default class MultiplyAcquireActionsByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private gradeName;
    private propertyId;
    private rateName;
    private acquireActions;
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
    getGradeName(): string | null;
    setGradeName(gradeName: string | null): this;
    withGradeName(gradeName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getAcquireActions(): Gs2Grade.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Grade.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Grade.AcquireAction[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MultiplyAcquireActionsByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
