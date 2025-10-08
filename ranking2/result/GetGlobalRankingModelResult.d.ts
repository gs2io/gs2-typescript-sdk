import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class GetGlobalRankingModelResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.GlobalRankingModel | null;
    setItem(item: Gs2Ranking2.GlobalRankingModel | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGlobalRankingModelResult;
    toDict(): {
        [key: string]: any;
    };
}
