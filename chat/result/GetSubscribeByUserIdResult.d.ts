import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class GetSubscribeByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Chat.Subscribe | null;
    setItem(item: Gs2Chat.Subscribe | null): this;
    withItem(item: Gs2Chat.Subscribe | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSubscribeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
