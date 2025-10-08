import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class DescribeRateModelsResult implements IResult {
    private items;
    getItems(): Gs2Exchange.RateModel[] | null;
    setItems(items: Gs2Exchange.RateModel[] | null): this;
    withItems(items: Gs2Exchange.RateModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRateModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
