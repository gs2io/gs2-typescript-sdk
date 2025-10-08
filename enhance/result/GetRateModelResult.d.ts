import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class GetRateModelResult implements IResult {
    private item;
    getItem(): Gs2Enhance.RateModel | null;
    setItem(item: Gs2Enhance.RateModel | null): this;
    withItem(item: Gs2Enhance.RateModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRateModelResult;
    toDict(): {
        [key: string]: any;
    };
}
