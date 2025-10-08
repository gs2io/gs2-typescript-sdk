import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetGlobalRankingReceivedRewardResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.GlobalRankingReceivedReward | null;
    setItem(item: Gs2Ranking2.GlobalRankingReceivedReward | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingReceivedReward | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGlobalRankingReceivedRewardResult;
    toDict(): {
        [key: string]: any;
    };
}
