import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class RejectRequestResult implements IResult {
    private item;
    getItem(): Gs2Guild.ReceiveMemberRequest | null;
    setItem(item: Gs2Guild.ReceiveMemberRequest | null): this;
    withItem(item: Gs2Guild.ReceiveMemberRequest | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RejectRequestResult;
    toDict(): {
        [key: string]: any;
    };
}
