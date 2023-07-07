import IRequest from '../../core/interface/IRequest';
import * as Gs2Inventory from '../model';
export default class ConsumeSimpleItemsRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private accessToken;
    private consumeCounts;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getConsumeCounts(): Gs2Inventory.ConsumeCount[] | null;
    setConsumeCounts(consumeCounts: Gs2Inventory.ConsumeCount[] | null): this;
    withConsumeCounts(consumeCounts: Gs2Inventory.ConsumeCount[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumeSimpleItemsRequest;
    toDict(): {
        [key: string]: any;
    };
}
