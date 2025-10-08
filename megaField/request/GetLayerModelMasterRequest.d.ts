import IRequest from '../../core/interface/IRequest';
export default class GetLayerModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private areaModelName;
    private layerModelName;
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
    getLayerModelName(): string | null;
    setLayerModelName(layerModelName: string | null): this;
    withLayerModelName(layerModelName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLayerModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
