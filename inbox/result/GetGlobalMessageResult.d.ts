import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class GetGlobalMessageResult implements IResult {
    private item;
    getItem(): Gs2Inbox.GlobalMessage | null;
    setItem(item: Gs2Inbox.GlobalMessage | null): this;
    withItem(item: Gs2Inbox.GlobalMessage | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGlobalMessageResult;
    toDict(): {
        [key: string]: any;
    };
}
