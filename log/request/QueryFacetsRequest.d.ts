import IRequest from '../../core/interface/IRequest';
export default class QueryFacetsRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private begin;
    private end;
    private query;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getBegin(): number | null;
    setBegin(begin: number | null): this;
    withBegin(begin: number | null): this;
    getEnd(): number | null;
    setEnd(end: number | null): this;
    withEnd(end: number | null): this;
    getQuery(): string | null;
    setQuery(query: string | null): this;
    withQuery(query: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QueryFacetsRequest;
    toDict(): {
        [key: string]: any;
    };
}
