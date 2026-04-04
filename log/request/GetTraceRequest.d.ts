import IRequest from '../../core/interface/IRequest';
export default class GetTraceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private traceId;
    private begin;
    private end;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getTraceId(): string | null;
    setTraceId(traceId: string | null): this;
    withTraceId(traceId: string | null): this;
    getBegin(): number | null;
    setBegin(begin: number | null): this;
    withBegin(begin: number | null): this;
    getEnd(): number | null;
    setEnd(end: number | null): this;
    withEnd(end: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetTraceRequest;
    toDict(): {
        [key: string]: any;
    };
}
