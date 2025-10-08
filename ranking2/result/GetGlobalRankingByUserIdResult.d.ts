import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetGlobalRankingByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.GlobalRankingData | null;
    setItem(item: Gs2Ranking2.GlobalRankingData | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingData | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGlobalRankingByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
