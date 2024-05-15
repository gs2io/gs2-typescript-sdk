import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class SendRequestResult implements IResult {
    private item;
    private sendMemberRequest;
    getItem(): Gs2Guild.Guild | null;
    setItem(item: Gs2Guild.Guild | null): this;
    withItem(item: Gs2Guild.Guild | null): this;
    getSendMemberRequest(): Gs2Guild.SendMemberRequest | null;
    setSendMemberRequest(sendMemberRequest: Gs2Guild.SendMemberRequest | null): this;
    withSendMemberRequest(sendMemberRequest: Gs2Guild.SendMemberRequest | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendRequestResult;
    toDict(): {
        [key: string]: any;
    };
}
