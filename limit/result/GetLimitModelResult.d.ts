import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class GetLimitModelResult implements IResult {
    private item;
    getItem(): Gs2Limit.LimitModel | null;
    setItem(item: Gs2Limit.LimitModel | null): this;
    withItem(item: Gs2Limit.LimitModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLimitModelResult;
    toDict(): {
        [key: string]: any;
    };
}
