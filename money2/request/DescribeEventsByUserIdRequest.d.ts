import IRequest from '../../core/interface/IRequest';
export default class DescribeEventsByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private begin;
    private end;
    private pageToken;
    private limit;
    private timeOffsetToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getBegin(): number | null;
    setBegin(begin: number | null): this;
    withBegin(begin: number | null): this;
    getEnd(): number | null;
    setEnd(end: number | null): this;
    withEnd(end: number | null): this;
    getPageToken(): string | null;
    setPageToken(pageToken: string | null): this;
    withPageToken(pageToken: string | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeEventsByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
