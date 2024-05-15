import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DeleteRequestByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Guild.SendMemberRequest | null;
    setItem(item: Gs2Guild.SendMemberRequest | null): this;
    withItem(item: Gs2Guild.SendMemberRequest | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteRequestByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
