import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class GetBallotByUserIdResult implements IResult {
    private item;
    private body;
    private signature;
    getItem(): Gs2Matchmaking.Ballot | null;
    setItem(item: Gs2Matchmaking.Ballot | null): this;
    withItem(item: Gs2Matchmaking.Ballot | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBallotByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
