import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class GetBallotResult implements IResult {
    private item;
    private body;
    private signature;
    getItem(): Gs2SeasonRating.Ballot | null;
    setItem(item: Gs2SeasonRating.Ballot | null): this;
    withItem(item: Gs2SeasonRating.Ballot | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBallotResult;
    toDict(): {
        [key: string]: any;
    };
}
