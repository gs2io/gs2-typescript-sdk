import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class GetProgressResult implements IResult {
    private item;
    private rateModel;
    getItem(): Gs2Enhance.Progress | null;
    setItem(item: Gs2Enhance.Progress | null): this;
    withItem(item: Gs2Enhance.Progress | null): this;
    getRateModel(): Gs2Enhance.RateModel | null;
    setRateModel(rateModel: Gs2Enhance.RateModel | null): this;
    withRateModel(rateModel: Gs2Enhance.RateModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetProgressResult;
    toDict(): {
        [key: string]: any;
    };
}
