import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class GetCurrentDistributorMasterResult implements IResult {
    private item;
    getItem(): Gs2Distributor.CurrentDistributorMaster | null;
    setItem(item: Gs2Distributor.CurrentDistributorMaster | null): this;
    withItem(item: Gs2Distributor.CurrentDistributorMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentDistributorMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
