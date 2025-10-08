import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DescribeSubscribeRankingModelsResult implements IResult {
    private items;
    getItems(): Gs2Ranking2.SubscribeRankingModel[] | null;
    setItems(items: Gs2Ranking2.SubscribeRankingModel[] | null): this;
    withItems(items: Gs2Ranking2.SubscribeRankingModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSubscribeRankingModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
