import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class VerifyIncludeMemberByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Guild.Guild | null;
    setItem(item: Gs2Guild.Guild | null): this;
    withItem(item: Gs2Guild.Guild | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyIncludeMemberByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
