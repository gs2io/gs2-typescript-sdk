import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DeleteSubscribeRankingScoreByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.SubscribeRankingScore | null;
    setItem(item: Gs2Ranking2.SubscribeRankingScore | null): this;
    withItem(item: Gs2Ranking2.SubscribeRankingScore | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteSubscribeRankingScoreByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
