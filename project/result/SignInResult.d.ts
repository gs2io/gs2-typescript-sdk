import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Project from '../model';
export declare class SignInResult implements IResult {
    private item;
    private accountToken;
    getItem(): Gs2Project.Account | null;
    setItem(item: Gs2Project.Account | null): this;
    withItem(item: Gs2Project.Account | null): this;
    getAccountToken(): string | null;
    setAccountToken(accountToken: string | null): this;
    withAccountToken(accountToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SignInResult;
    toDict(): {
        [key: string]: any;
    };
}
