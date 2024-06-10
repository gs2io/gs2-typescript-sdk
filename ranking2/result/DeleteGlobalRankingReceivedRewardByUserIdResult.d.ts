import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DeleteGlobalRankingReceivedRewardByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.GlobalRankingReceivedReward | null;
    setItem(item: Gs2Ranking2.GlobalRankingReceivedReward | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingReceivedReward | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteGlobalRankingReceivedRewardByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
