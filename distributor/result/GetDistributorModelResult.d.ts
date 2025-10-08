import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class GetDistributorModelResult implements IResult {
    private item;
    getItem(): Gs2Distributor.DistributorModel | null;
    setItem(item: Gs2Distributor.DistributorModel | null): this;
    withItem(item: Gs2Distributor.DistributorModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDistributorModelResult;
    toDict(): {
        [key: string]: any;
    };
}
