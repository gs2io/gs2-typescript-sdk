import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class UpdateSeasonModelMasterResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.SeasonModelMaster | null;
    setItem(item: Gs2SeasonRating.SeasonModelMaster | null): this;
    withItem(item: Gs2SeasonRating.SeasonModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateSeasonModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
