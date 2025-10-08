import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class VerifyIncludeParticipantByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Matchmaking.SeasonGathering | null;
    setItem(item: Gs2Matchmaking.SeasonGathering | null): this;
    withItem(item: Gs2Matchmaking.SeasonGathering | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyIncludeParticipantByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
