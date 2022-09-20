import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class ExportMasterResult implements IResult {
    private item;
    getItem(): Gs2SerialKey.CurrentCampaignMaster | null;
    setItem(item: Gs2SerialKey.CurrentCampaignMaster | null): this;
    withItem(item: Gs2SerialKey.CurrentCampaignMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExportMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
