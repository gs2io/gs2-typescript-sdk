import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class PutGlobalRankingScoreByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.GlobalRankingScore | null;
    setItem(item: Gs2Ranking2.GlobalRankingScore | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingScore | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutGlobalRankingScoreByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
