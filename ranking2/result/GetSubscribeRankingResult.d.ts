import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetSubscribeRankingResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.SubscribeRankingData | null;
    setItem(item: Gs2Ranking2.SubscribeRankingData | null): this;
    withItem(item: Gs2Ranking2.SubscribeRankingData | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSubscribeRankingResult;
    toDict(): {
        [key: string]: any;
    };
}
