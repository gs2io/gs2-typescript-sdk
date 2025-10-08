import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class GetRatingModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.RatingModelMaster | null;
    setItem(item: Gs2Matchmaking.RatingModelMaster | null): this;
    withItem(item: Gs2Matchmaking.RatingModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRatingModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
