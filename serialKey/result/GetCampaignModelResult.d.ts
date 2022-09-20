import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class GetCampaignModelResult implements IResult {
    private item;
    getItem(): Gs2SerialKey.CampaignModel | null;
    setItem(item: Gs2SerialKey.CampaignModel | null): this;
    withItem(item: Gs2SerialKey.CampaignModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCampaignModelResult;
    toDict(): {
        [key: string]: any;
    };
}
