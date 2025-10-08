import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetRankingCategoryModelMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.RankingCategoryModel | null;
    setItem(item: Gs2Watch.RankingCategoryModel | null): this;
    withItem(item: Gs2Watch.RankingCategoryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRankingCategoryModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
