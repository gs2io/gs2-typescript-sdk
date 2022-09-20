import IModel from '../../core/interface/IModel';
export default class CampaignModel implements IModel {
    private campaignId;
    private name;
    private metadata;
    private enableCampaignCode;
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
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getEnableCampaignCode(): boolean | null;
    setEnableCampaignCode(enableCampaignCode: boolean | null): this;
    withEnableCampaignCode(enableCampaignCode: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CampaignModel | null;
    toDict(): {
        [key: string]: any;
    };
}
