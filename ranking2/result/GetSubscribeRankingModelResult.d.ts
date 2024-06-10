import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetSubscribeRankingModelResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.SubscribeRankingModel | null;
    setItem(item: Gs2Ranking2.SubscribeRankingModel | null): this;
    withItem(item: Gs2Ranking2.SubscribeRankingModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSubscribeRankingModelResult;
    toDict(): {
        [key: string]: any;
    };
}
