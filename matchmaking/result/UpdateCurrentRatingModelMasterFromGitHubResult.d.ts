import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class UpdateCurrentRatingModelMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.CurrentRatingModelMaster | null;
    setItem(item: Gs2Matchmaking.CurrentRatingModelMaster | null): this;
    withItem(item: Gs2Matchmaking.CurrentRatingModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentRatingModelMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
