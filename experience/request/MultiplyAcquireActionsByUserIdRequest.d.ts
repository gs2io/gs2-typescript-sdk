import IRequest from '../../core/interface/IRequest';
import * as Gs2Experience from '../model';
export default class MultiplyAcquireActionsByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private experienceName;
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
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getAcquireActions(): Gs2Experience.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Experience.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Experience.AcquireAction[] | null): this;
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
