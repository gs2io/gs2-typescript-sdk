import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class GetLogResult implements IResult {
    private item;
    getItem(): Gs2Log.LogEntry | null;
    setItem(item: Gs2Log.LogEntry | null): this;
    withItem(item: Gs2Log.LogEntry | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLogResult;
    toDict(): {
        [key: string]: any;
    };
}
