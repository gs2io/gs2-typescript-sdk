import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class UpdateCurrentSeasonModelMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.CurrentSeasonModelMaster | null;
    setItem(item: Gs2SeasonRating.CurrentSeasonModelMaster | null): this;
    withItem(item: Gs2SeasonRating.CurrentSeasonModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentSeasonModelMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
