import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class VoteMultipleResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.Ballot | null;
    setItem(item: Gs2Matchmaking.Ballot | null): this;
    withItem(item: Gs2Matchmaking.Ballot | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VoteMultipleResult;
    toDict(): {
        [key: string]: any;
    };
}
