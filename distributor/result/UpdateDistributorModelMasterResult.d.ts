import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class UpdateDistributorModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Distributor.DistributorModelMaster | null;
    setItem(item: Gs2Distributor.DistributorModelMaster | null): this;
    withItem(item: Gs2Distributor.DistributorModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateDistributorModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
