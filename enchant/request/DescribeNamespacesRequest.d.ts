import IRequest from '../../core/interface/IRequest';
export default class DescribeNamespacesRequest implements IRequest {
    private requestId;
    private contextStack;
    private namePrefix;
    private pageToken;
    private limit;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamePrefix(): string | null;
    setNamePrefix(namePrefix: string | null): this;
    withNamePrefix(namePrefix: string | null): this;
    getPageToken(): string | null;
    setPageToken(pageToken: string | null): this;
    withPageToken(pageToken: string | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeNamespacesRequest;
    toDict(): {
        [key: string]: any;
    };
}
