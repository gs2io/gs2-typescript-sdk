import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class CreateSeasonModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.SeasonModelMaster | null;
    setItem(item: Gs2Matchmaking.SeasonModelMaster | null): this;
    withItem(item: Gs2Matchmaking.SeasonModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateSeasonModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
