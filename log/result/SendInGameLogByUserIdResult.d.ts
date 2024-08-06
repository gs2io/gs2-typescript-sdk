import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class SendInGameLogByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Log.InGameLog | null;
    setItem(item: Gs2Log.InGameLog | null): this;
    withItem(item: Gs2Log.InGameLog | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendInGameLogByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
