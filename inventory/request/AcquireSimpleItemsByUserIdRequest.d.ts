import IRequest from '../../core/interface/IRequest';
import * as Gs2Inventory from '../model';
export default class AcquireSimpleItemsByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private userId;
    private acquireCounts;
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
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getAcquireCounts(): Gs2Inventory.AcquireCount[] | null;
    setAcquireCounts(acquireCounts: Gs2Inventory.AcquireCount[] | null): this;
    withAcquireCounts(acquireCounts: Gs2Inventory.AcquireCount[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireSimpleItemsByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
