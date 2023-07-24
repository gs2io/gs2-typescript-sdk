import IRequest from '../../core/interface/IRequest';
export default class GetStateMachineMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private version;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getVersion(): number | null;
    setVersion(version: number | null): this;
    withVersion(version: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStateMachineMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
