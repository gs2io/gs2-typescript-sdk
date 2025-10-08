import IRequest from '../../core/interface/IRequest';
export default class DeleteCounterModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private counterName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteCounterModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
