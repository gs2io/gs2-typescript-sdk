import IModel from '../../core/interface/IModel';
export default class DistributorModel implements IModel {
    private distributorModelId;
    private name;
    private metadata;
    private inboxNamespaceId;
    private whiteListTargetIds;
    getDistributorModelId(): string | null;
    setDistributorModelId(distributorModelId: string | null): this;
    withDistributorModelId(distributorModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getInboxNamespaceId(): string | null;
    setInboxNamespaceId(inboxNamespaceId: string | null): this;
    withInboxNamespaceId(inboxNamespaceId: string | null): this;
    getWhiteListTargetIds(): string[] | null;
    setWhiteListTargetIds(whiteListTargetIds: string[] | null): this;
    withWhiteListTargetIds(whiteListTargetIds: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DistributorModel | null;
    toDict(): {
        [key: string]: any;
    };
}
