import IRequest from '../../core/interface/IRequest';
export default class UpdateDistributorModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private distributorName;
    private description;
    private metadata;
    private inboxNamespaceId;
    private whiteListTargetIds;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDistributorName(): string | null;
    setDistributorName(distributorName: string | null): this;
    withDistributorName(distributorName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
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
    }): UpdateDistributorModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
