import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DescribeMessagesResult implements IResult {
    private items;
    getItems(): Gs2Chat.Message[] | null;
    setItems(items: Gs2Chat.Message[] | null): this;
    withItems(items: Gs2Chat.Message[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMessagesResult;
    toDict(): {
        [key: string]: any;
    };
}
