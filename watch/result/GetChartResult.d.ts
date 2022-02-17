import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetChartResult implements IResult {
    private item;
    getItem(): Gs2Watch.Chart | null;
    setItem(item: Gs2Watch.Chart | null): this;
    withItem(item: Gs2Watch.Chart | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetChartResult;
    toDict(): {
        [key: string]: any;
    };
}
