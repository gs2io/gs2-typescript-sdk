import IRequest from '../../core/interface/IRequest';
export default class GetEntryModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private entryName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getEntryName(): string | null;
    setEntryName(entryName: string | null): this;
    withEntryName(entryName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEntryModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
