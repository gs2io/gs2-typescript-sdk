import IRequest from '../../core/interface/IRequest';
export default class GetMoldModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private moldName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getMoldName(): string | null;
    setMoldName(moldName: string | null): this;
    withMoldName(moldName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMoldModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
