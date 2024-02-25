import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class VoteMultipleResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.Ballot | null;
    setItem(item: Gs2SeasonRating.Ballot | null): this;
    withItem(item: Gs2SeasonRating.Ballot | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VoteMultipleResult;
    toDict(): {
        [key: string]: any;
    };
}
