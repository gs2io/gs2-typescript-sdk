import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DeleteMessageResult implements IResult {
    private item;
    getItem(): Gs2Chat.Message | null;
    setItem(item: Gs2Chat.Message | null): this;
    withItem(item: Gs2Chat.Message | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteMessageResult;
    toDict(): {
        [key: string]: any;
    };
}
