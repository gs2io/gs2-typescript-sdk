import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class UpdateCurrentRankingMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.CurrentRankingMaster | null;
    setItem(item: Gs2Ranking2.CurrentRankingMaster | null): this;
    withItem(item: Gs2Ranking2.CurrentRankingMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentRankingMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
