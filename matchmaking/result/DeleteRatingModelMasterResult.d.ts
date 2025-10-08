import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DeleteRatingModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.RatingModelMaster | null;
    setItem(item: Gs2Matchmaking.RatingModelMaster | null): this;
    withItem(item: Gs2Matchmaking.RatingModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteRatingModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
