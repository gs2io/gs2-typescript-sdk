import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class DescribeUnleashRateModelsResult implements IResult {
    private items;
    getItems(): Gs2Enhance.UnleashRateModel[] | null;
    setItems(items: Gs2Enhance.UnleashRateModel[] | null): this;
    withItems(items: Gs2Enhance.UnleashRateModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeUnleashRateModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
