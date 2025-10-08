import IRequest from '../../core/interface/IRequest';
export default class CreateItemModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private name;
    private description;
    private metadata;
    private stackingLimit;
    private allowMultipleStacks;
    private sortValue;
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
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getStackingLimit(): number | null;
    setStackingLimit(stackingLimit: number | null): this;
    withStackingLimit(stackingLimit: number | null): this;
    getAllowMultipleStacks(): boolean | null;
    setAllowMultipleStacks(allowMultipleStacks: boolean | null): this;
    withAllowMultipleStacks(allowMultipleStacks: boolean | null): this;
    getSortValue(): number | null;
    setSortValue(sortValue: number | null): this;
    withSortValue(sortValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateItemModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
