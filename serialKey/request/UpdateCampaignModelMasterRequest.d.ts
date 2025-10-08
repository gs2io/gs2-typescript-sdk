import IRequest from '../../core/interface/IRequest';
export default class UpdateCampaignModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private campaignModelName;
    private description;
    private metadata;
    private enableCampaignCode;
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
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getEnableCampaignCode(): boolean | null;
    setEnableCampaignCode(enableCampaignCode: boolean | null): this;
    withEnableCampaignCode(enableCampaignCode: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCampaignModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
