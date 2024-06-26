import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class GetUnusedBalanceResult implements IResult {
    private item;
    getItem(): Gs2Money2.UnusedBalance | null;
    setItem(item: Gs2Money2.UnusedBalance | null): this;
    withItem(item: Gs2Money2.UnusedBalance | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetUnusedBalanceResult;
    toDict(): {
        [key: string]: any;
    };
}
