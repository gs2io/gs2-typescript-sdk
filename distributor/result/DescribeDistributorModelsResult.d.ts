import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class DescribeDistributorModelsResult implements IResult {
    private items;
    getItems(): Gs2Distributor.DistributorModel[] | null;
    setItems(items: Gs2Distributor.DistributorModel[] | null): this;
    withItems(items: Gs2Distributor.DistributorModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeDistributorModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
