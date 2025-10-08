import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class ReceiveGlobalMessageByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Inbox.Message[] | null;
    setItem(item: Gs2Inbox.Message[] | null): this;
    withItem(item: Gs2Inbox.Message[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReceiveGlobalMessageByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
