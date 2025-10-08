import IRequest from '../../core/interface/IRequest';
export default class CreateLayerModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private areaModelName;
    private name;
    private description;
    private metadata;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getAreaModelName(): string | null;
    setAreaModelName(areaModelName: string | null): this;
    withAreaModelName(areaModelName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateLayerModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
