import IRequest from '../../core/interface/IRequest';
export default class DescribeOutputsRequest implements IRequest {
    private requestId;
    private contextStack;
    private stageName;
    private pageToken;
    private limit;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStageName(): string | null;
    setStageName(stageName: string | null): this;
    withStageName(stageName: string | null): this;
    getPageToken(): string | null;
    setPageToken(pageToken: string | null): this;
    withPageToken(pageToken: string | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeOutputsRequest;
    toDict(): {
        [key: string]: any;
    };
}
