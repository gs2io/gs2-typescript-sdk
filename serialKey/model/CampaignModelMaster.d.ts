import IModel from '../../core/interface/IModel';
export default class CampaignModelMaster implements IModel {
    private campaignId;
    private name;
    private description;
    private metadata;
    private enableCampaignCode;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getCampaignModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, campaignModelName: string | null): string | null;
    getCampaignId(): string | null;
    setCampaignId(campaignId: string | null): this;
    withCampaignId(campaignId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getEnableCampaignCode(): boolean | null;
    setEnableCampaignCode(enableCampaignCode: boolean | null): this;
    withEnableCampaignCode(enableCampaignCode: boolean | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CampaignModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}