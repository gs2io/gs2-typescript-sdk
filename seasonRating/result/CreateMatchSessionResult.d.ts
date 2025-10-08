import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class CreateMatchSessionResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.MatchSession | null;
    setItem(item: Gs2SeasonRating.MatchSession | null): this;
    withItem(item: Gs2SeasonRating.MatchSession | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateMatchSessionResult;
    toDict(): {
        [key: string]: any;
    };
}
