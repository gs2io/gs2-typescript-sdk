import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetShowcaseShowcaseMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ShowcaseShowcase | null;
    setItem(item: Gs2Watch.ShowcaseShowcase | null): this;
    withItem(item: Gs2Watch.ShowcaseShowcase | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetShowcaseShowcaseMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
