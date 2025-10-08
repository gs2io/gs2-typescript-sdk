import IRequest from '../../core/interface/IRequest';
export default class DescribeReceiveRequestsByGuildNameRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private guildModelName;
    private guildName;
    private pageToken;
    private limit;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getGuildModelName(): string | null;
    setGuildModelName(guildModelName: string | null): this;
    withGuildModelName(guildModelName: string | null): this;
    getGuildName(): string | null;
    setGuildName(guildName: string | null): this;
    withGuildName(guildName: string | null): this;
    getPageToken(): string | null;
    setPageToken(pageToken: string | null): this;
    withPageToken(pageToken: string | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeReceiveRequestsByGuildNameRequest;
    toDict(): {
        [key: string]: any;
    };
}
