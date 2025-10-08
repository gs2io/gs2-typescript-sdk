import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class VerifyIncludeParticipantResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.SeasonGathering | null;
    setItem(item: Gs2Matchmaking.SeasonGathering | null): this;
    withItem(item: Gs2Matchmaking.SeasonGathering | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyIncludeParticipantResult;
    toDict(): {
        [key: string]: any;
    };
}
