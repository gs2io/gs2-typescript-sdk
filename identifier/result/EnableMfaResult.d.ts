import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class EnableMfaResult implements IResult {
    private item;
    private challengeToken;
    getItem(): Gs2Identifier.Password | null;
    setItem(item: Gs2Identifier.Password | null): this;
    withItem(item: Gs2Identifier.Password | null): this;
    getChallengeToken(): string | null;
    setChallengeToken(challengeToken: string | null): this;
    withChallengeToken(challengeToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EnableMfaResult;
    toDict(): {
        [key: string]: any;
    };
}
