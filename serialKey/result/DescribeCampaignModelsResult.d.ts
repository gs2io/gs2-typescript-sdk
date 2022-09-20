import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class DescribeCampaignModelsResult implements IResult {
    private items;
    getItems(): Gs2SerialKey.CampaignModel[] | null;
    setItems(items: Gs2SerialKey.CampaignModel[] | null): this;
    withItems(items: Gs2SerialKey.CampaignModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCampaignModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
