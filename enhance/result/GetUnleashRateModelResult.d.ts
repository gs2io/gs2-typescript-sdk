import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class GetUnleashRateModelResult implements IResult {
    private item;
    getItem(): Gs2Enhance.UnleashRateModel | null;
    setItem(item: Gs2Enhance.UnleashRateModel | null): this;
    withItem(item: Gs2Enhance.UnleashRateModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetUnleashRateModelResult;
    toDict(): {
        [key: string]: any;
    };
}
