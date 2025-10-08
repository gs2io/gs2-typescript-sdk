import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class UpdateCurrentRankingMasterResult implements IResult {
    private item;
    getItem(): Gs2Ranking.CurrentRankingMaster | null;
    setItem(item: Gs2Ranking.CurrentRankingMaster | null): this;
    withItem(item: Gs2Ranking.CurrentRankingMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentRankingMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
