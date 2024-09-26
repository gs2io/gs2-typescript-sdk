import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DescribeLatestMessagesByUserIdResult implements IResult {
    private items;
    getItems(): Gs2Chat.Message[] | null;
    setItems(items: Gs2Chat.Message[] | null): this;
    withItems(items: Gs2Chat.Message[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLatestMessagesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
