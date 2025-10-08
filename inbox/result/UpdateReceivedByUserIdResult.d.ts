import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class UpdateReceivedByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Inbox.Received | null;
    setItem(item: Gs2Inbox.Received | null): this;
    withItem(item: Gs2Inbox.Received | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateReceivedByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
