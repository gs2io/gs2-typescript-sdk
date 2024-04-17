import IRequest from '../../core/interface/IRequest';
export default class GetBuffEntryModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private buffEntryName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getBuffEntryName(): string | null;
    setBuffEntryName(buffEntryName: string | null): this;
    withBuffEntryName(buffEntryName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBuffEntryModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
