import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class UpdateCurrentCampaignMasterResult implements IResult {
    private item;
    getItem(): Gs2SerialKey.CurrentCampaignMaster | null;
    setItem(item: Gs2SerialKey.CurrentCampaignMaster | null): this;
    withItem(item: Gs2SerialKey.CurrentCampaignMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentCampaignMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
