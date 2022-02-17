import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class GetRankingByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Ranking.Ranking | null;
    setItem(item: Gs2Ranking.Ranking | null): this;
    withItem(item: Gs2Ranking.Ranking | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRankingByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
