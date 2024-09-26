import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DescribeLatestMessagesResult implements IResult {
    private items;
    getItems(): Gs2Chat.Message[] | null;
    setItems(items: Gs2Chat.Message[] | null): this;
    withItems(items: Gs2Chat.Message[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLatestMessagesResult;
    toDict(): {
        [key: string]: any;
    };
}
