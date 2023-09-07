import IRequest from '../../core/interface/IRequest';
export default class GetFormModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private moldModelName;
    private formModelName;
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
    getFormModelName(): string | null;
    setFormModelName(formModelName: string | null): this;
    withFormModelName(formModelName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFormModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
