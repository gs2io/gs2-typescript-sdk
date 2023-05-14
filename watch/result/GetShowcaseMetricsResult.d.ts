import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetShowcaseMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ShowcaseMetrics | null;
    setItem(item: Gs2Watch.ShowcaseMetrics | null): this;
    withItem(item: Gs2Watch.ShowcaseMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetShowcaseMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
