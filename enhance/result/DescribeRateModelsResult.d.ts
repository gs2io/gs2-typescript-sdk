import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class DescribeRateModelsResult implements IResult {
    private items;
    getItems(): Gs2Enhance.RateModel[] | null;
    setItems(items: Gs2Enhance.RateModel[] | null): this;
    withItems(items: Gs2Enhance.RateModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRateModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
