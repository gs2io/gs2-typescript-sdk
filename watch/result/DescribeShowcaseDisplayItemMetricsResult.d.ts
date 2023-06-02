import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeShowcaseDisplayItemMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ShowcaseDisplayItem[] | null;
    setItems(items: Gs2Watch.ShowcaseDisplayItem[] | null): this;
    withItems(items: Gs2Watch.ShowcaseDisplayItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeShowcaseDisplayItemMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
