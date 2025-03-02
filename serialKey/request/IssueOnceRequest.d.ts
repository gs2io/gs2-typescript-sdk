import IRequest from '../../core/interface/IRequest';
export default class IssueOnceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private campaignModelName;
    private metadata;
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
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssueOnceRequest;
    toDict(): {
        [key: string]: any;
    };
}
