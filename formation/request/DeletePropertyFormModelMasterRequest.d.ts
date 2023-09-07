import IRequest from '../../core/interface/IRequest';
export default class DeletePropertyFormModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private propertyFormModelName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getPropertyFormModelName(): string | null;
    setPropertyFormModelName(propertyFormModelName: string | null): this;
    withPropertyFormModelName(propertyFormModelName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeletePropertyFormModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
