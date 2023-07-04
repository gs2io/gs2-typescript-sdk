import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class DescribeIncrementalRateModelsResult implements IResult {
    private items;
    getItems(): Gs2Exchange.IncrementalRateModel[] | null;
    setItems(items: Gs2Exchange.IncrementalRateModel[] | null): this;
    withItems(items: Gs2Exchange.IncrementalRateModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeIncrementalRateModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
