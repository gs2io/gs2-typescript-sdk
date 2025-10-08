import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class EnableMfaResult implements IResult {
    private item;
    private challengeToken;
    getItem(): Gs2Project.Account | null;
    setItem(item: Gs2Project.Account | null): this;
    withItem(item: Gs2Project.Account | null): this;
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
