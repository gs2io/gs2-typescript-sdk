import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetCumulativeResult implements IResult {
    private item;
    getItem(): Gs2Watch.Cumulative | null;
    setItem(item: Gs2Watch.Cumulative | null): this;
    withItem(item: Gs2Watch.Cumulative | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCumulativeResult;
    toDict(): {
        [key: string]: any;
    };
}
