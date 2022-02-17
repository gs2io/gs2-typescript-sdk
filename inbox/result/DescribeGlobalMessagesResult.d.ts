import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class DescribeGlobalMessagesResult implements IResult {
    private items;
    getItems(): Gs2Inbox.GlobalMessage[] | null;
    setItems(items: Gs2Inbox.GlobalMessage[] | null): this;
    withItems(items: Gs2Inbox.GlobalMessage[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGlobalMessagesResult;
    toDict(): {
        [key: string]: any;
    };
}
