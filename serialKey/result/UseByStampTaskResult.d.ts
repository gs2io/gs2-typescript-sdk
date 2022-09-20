import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class UseByStampTaskResult implements IResult {
    private item;
    private campaignModel;
    private newContextStack;
    getItem(): Gs2SerialKey.SerialKey | null;
    setItem(item: Gs2SerialKey.SerialKey | null): this;
    withItem(item: Gs2SerialKey.SerialKey | null): this;
    getCampaignModel(): Gs2SerialKey.CampaignModel | null;
    setCampaignModel(campaignModel: Gs2SerialKey.CampaignModel | null): this;
    withCampaignModel(campaignModel: Gs2SerialKey.CampaignModel | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UseByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
