import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class VerifyRatingByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Matchmaking.Rating | null;
    setItem(item: Gs2Matchmaking.Rating | null): this;
    withItem(item: Gs2Matchmaking.Rating | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRatingByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
