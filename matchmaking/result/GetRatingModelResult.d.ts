import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class GetRatingModelResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.RatingModel | null;
    setItem(item: Gs2Matchmaking.RatingModel | null): this;
    withItem(item: Gs2Matchmaking.RatingModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRatingModelResult;
    toDict(): {
        [key: string]: any;
    };
}
