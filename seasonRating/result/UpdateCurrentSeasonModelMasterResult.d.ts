import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class UpdateCurrentSeasonModelMasterResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.CurrentSeasonModelMaster | null;
    setItem(item: Gs2SeasonRating.CurrentSeasonModelMaster | null): this;
    withItem(item: Gs2SeasonRating.CurrentSeasonModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentSeasonModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
