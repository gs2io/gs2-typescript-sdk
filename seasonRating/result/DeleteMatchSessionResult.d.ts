import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class DeleteMatchSessionResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.MatchSession | null;
    setItem(item: Gs2SeasonRating.MatchSession | null): this;
    withItem(item: Gs2SeasonRating.MatchSession | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteMatchSessionResult;
    toDict(): {
        [key: string]: any;
    };
}
