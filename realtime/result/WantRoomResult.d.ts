import IResult from '../../core/interface/IResult';
import * as Gs2Realtime from '../model';
export default class WantRoomResult implements IResult {
    private item;
    getItem(): Gs2Realtime.Room | null;
    setItem(item: Gs2Realtime.Room | null): this;
    withItem(item: Gs2Realtime.Room | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WantRoomResult;
    toDict(): {
        [key: string]: any;
    };
}
