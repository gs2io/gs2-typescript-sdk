import IRequest from '../../core/interface/IRequest';
import * as Gs2Showcase from '../model';
export default class CreateShowcaseMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private metadata;
    private displayItems;
    private salesPeriodEventId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDisplayItems(): Gs2Showcase.DisplayItemMaster[] | null;
    setDisplayItems(displayItems: Gs2Showcase.DisplayItemMaster[] | null): this;
    withDisplayItems(displayItems: Gs2Showcase.DisplayItemMaster[] | null): this;
    getSalesPeriodEventId(): string | null;
    setSalesPeriodEventId(salesPeriodEventId: string | null): this;
    withSalesPeriodEventId(salesPeriodEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateShowcaseMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
