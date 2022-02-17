import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class UpdateRatingModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.RatingModelMaster | null;
    setItem(item: Gs2Matchmaking.RatingModelMaster | null): this;
    withItem(item: Gs2Matchmaking.RatingModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateRatingModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
