import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class GetCurrentSeasonModelMasterResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.CurrentSeasonModelMaster | null;
    setItem(item: Gs2SeasonRating.CurrentSeasonModelMaster | null): this;
    withItem(item: Gs2SeasonRating.CurrentSeasonModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentSeasonModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
