import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DescribeGlobalRankingModelsResult implements IResult {
    private items;
    getItems(): Gs2Ranking2.GlobalRankingModel[] | null;
    setItems(items: Gs2Ranking2.GlobalRankingModel[] | null): this;
    withItems(items: Gs2Ranking2.GlobalRankingModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGlobalRankingModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
