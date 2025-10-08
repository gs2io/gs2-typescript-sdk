import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class GetSeasonModelResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.SeasonModel | null;
    setItem(item: Gs2SeasonRating.SeasonModel | null): this;
    withItem(item: Gs2SeasonRating.SeasonModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSeasonModelResult;
    toDict(): {
        [key: string]: any;
    };
}
