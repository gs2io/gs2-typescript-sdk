import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class GetCurrentRatingModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.CurrentRatingModelMaster | null;
    setItem(item: Gs2Matchmaking.CurrentRatingModelMaster | null): this;
    withItem(item: Gs2Matchmaking.CurrentRatingModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentRatingModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
