import IRequest from '../../core/interface/IRequest';
export default class GetGlobalMessageMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private globalMessageName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getGlobalMessageName(): string | null;
    setGlobalMessageName(globalMessageName: string | null): this;
    withGlobalMessageName(globalMessageName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGlobalMessageMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
