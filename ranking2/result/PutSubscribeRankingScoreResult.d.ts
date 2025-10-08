import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class PutSubscribeRankingScoreResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.SubscribeRankingScore | null;
    setItem(item: Gs2Ranking2.SubscribeRankingScore | null): this;
    withItem(item: Gs2Ranking2.SubscribeRankingScore | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutSubscribeRankingScoreResult;
    toDict(): {
        [key: string]: any;
    };
}
