import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class UpdateCurrentDistributorMasterResult implements IResult {
    private item;
    getItem(): Gs2Distributor.CurrentDistributorMaster | null;
    setItem(item: Gs2Distributor.CurrentDistributorMaster | null): this;
    withItem(item: Gs2Distributor.CurrentDistributorMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentDistributorMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
