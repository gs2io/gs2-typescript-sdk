import IRequest from '../../core/interface/IRequest';
export default class UpdateMoldModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private moldModelName;
    private description;
    private metadata;
    private formModelName;
    private initialMaxCapacity;
    private maxCapacity;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getMoldModelName(): string | null;
    setMoldModelName(moldModelName: string | null): this;
    withMoldModelName(moldModelName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getFormModelName(): string | null;
    setFormModelName(formModelName: string | null): this;
    withFormModelName(formModelName: string | null): this;
    getInitialMaxCapacity(): number | null;
    setInitialMaxCapacity(initialMaxCapacity: number | null): this;
    withInitialMaxCapacity(initialMaxCapacity: number | null): this;
    getMaxCapacity(): number | null;
    setMaxCapacity(maxCapacity: number | null): this;
    withMaxCapacity(maxCapacity: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateMoldModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
