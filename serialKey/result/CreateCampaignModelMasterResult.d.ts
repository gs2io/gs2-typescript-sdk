import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class CreateCampaignModelMasterResult implements IResult {
    private item;
    getItem(): Gs2SerialKey.CampaignModelMaster | null;
    setItem(item: Gs2SerialKey.CampaignModelMaster | null): this;
    withItem(item: Gs2SerialKey.CampaignModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateCampaignModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
