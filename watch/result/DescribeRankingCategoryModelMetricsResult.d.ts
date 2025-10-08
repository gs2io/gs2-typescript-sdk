import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeRankingCategoryModelMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.RankingCategoryModel[] | null;
    setItems(items: Gs2Watch.RankingCategoryModel[] | null): this;
    withItems(items: Gs2Watch.RankingCategoryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRankingCategoryModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
