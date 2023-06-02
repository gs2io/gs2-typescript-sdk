import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetShowcaseDisplayItemMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ShowcaseDisplayItem | null;
    setItem(item: Gs2Watch.ShowcaseDisplayItem | null): this;
    withItem(item: Gs2Watch.ShowcaseDisplayItem | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetShowcaseDisplayItemMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
