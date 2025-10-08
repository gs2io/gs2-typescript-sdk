import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class RevertUseByUserIdResult implements IResult {
    private item;
    private campaignModel;
    getItem(): Gs2SerialKey.SerialKey | null;
    setItem(item: Gs2SerialKey.SerialKey | null): this;
    withItem(item: Gs2SerialKey.SerialKey | null): this;
    getCampaignModel(): Gs2SerialKey.CampaignModel | null;
    setCampaignModel(campaignModel: Gs2SerialKey.CampaignModel | null): this;
    withCampaignModel(campaignModel: Gs2SerialKey.CampaignModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RevertUseByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
