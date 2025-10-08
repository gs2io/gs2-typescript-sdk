import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeShowcaseShowcaseMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ShowcaseShowcase[] | null;
    setItems(items: Gs2Watch.ShowcaseShowcase[] | null): this;
    withItems(items: Gs2Watch.ShowcaseShowcase[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeShowcaseShowcaseMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
