import IRequest from '../../core/interface/IRequest';
export default class DescribeSerialKeysRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private campaignModelName;
    private issueJobName;
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
    getCampaignModelName(): string | null;
    setCampaignModelName(campaignModelName: string | null): this;
    withCampaignModelName(campaignModelName: string | null): this;
    getIssueJobName(): string | null;
    setIssueJobName(issueJobName: string | null): this;
    withIssueJobName(issueJobName: string | null): this;
    getPageToken(): string | null;
    setPageToken(pageToken: string | null): this;
    withPageToken(pageToken: string | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSerialKeysRequest;
    toDict(): {
        [key: string]: any;
    };
}
