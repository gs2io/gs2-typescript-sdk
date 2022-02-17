import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DeleteRoomFromBackendResult implements IResult {
    private item;
    getItem(): Gs2Chat.Room | null;
    setItem(item: Gs2Chat.Room | null): this;
    withItem(item: Gs2Chat.Room | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteRoomFromBackendResult;
    toDict(): {
        [key: string]: any;
    };
}
